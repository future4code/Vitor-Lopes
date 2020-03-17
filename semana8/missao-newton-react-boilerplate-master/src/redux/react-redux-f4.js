import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  createContext
} from "react";

export const MyContext = createContext({ store: {} });

export function Provider({ store, children }) {
  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

export function connect(mapDispatchToProps, mapStateToProps) {
  return function(Component) {
    class HOC extends React.Component {
      componentDidMount() {
        this.props.store.subscribe(this.updateComponent);
      }

      updateComponent = () => {
        this.forceUpdate();
      };

      render() {
        const dispatchProps = mapDispatchToProps
          ? mapDispatchToProps(this.props.store.dispatch)
          : {};
        const stateProps = mapStateToProps
          ? mapStateToProps(this.props.store.getState())
          : {};
        return <Component {...dispatchProps} {...stateProps} />;
      }
    }
    return () => (
      <MyContext.Consumer>{value => <HOC store={value} />}</MyContext.Consumer>
    );
  };
}

export const useConnect = (mapDispatchToProps, mapStateToProps) => {
  const store = useContext(MyContext);
  const [, setState] = useState();

  const update = useCallback(() => setState({}), []);

  useEffect(() => {
    const unsubscribe = store.subscribe(update);

    return () => unsubscribe();
  }, []);

  const dispatchProps = mapDispatchToProps
    ? mapDispatchToProps(store.dispatch)
    : {};
  const stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {};

  return { ...dispatchProps, ...stateProps };
};

export const useDispatch = () => {
  const store = useContext(MyContext);

  return store.dispatch;
};

export const useReduxState = () => {
  const store = useContext(MyContext);
  const [, setState] = useState();

  const update = useCallback(() => setState({}), []);

  useEffect(() => {
    const unsubscribe = store.subscribe(update);

    return () => unsubscribe();
  }, []);

  return store.getState();
};
