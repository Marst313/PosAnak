const ProtectedRoute = ({ children }) => {
  // const { token, uuid, email } = useSelector((store) => store.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllDataUser());
  // }, []);

  /*   if (!token) {
    return <Navigate to="/" />;
} */
  return children;
};

export default ProtectedRoute;
