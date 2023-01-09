import CardPage from "../components/pages/CardPage";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/5 border-r min-h-screen">filterpage</div>
      <div className="w-4/5">
        {" "}
        <CardPage />
      </div>
    </div>
  );
};

export default Home;
