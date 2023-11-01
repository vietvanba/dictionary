import Header from "./Header";
import History from "./History";
import SearchDictionary from "./SearchDic";
import AboutProject from "./AboutProject";

function HomePage() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-8 gap-12">
        <div className="col-span-2 pl-12 pt-12">
          <History />
        </div>
        <div className="col-span-4">
          <SearchDictionary />
          <AboutProject />
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}
export default HomePage;
