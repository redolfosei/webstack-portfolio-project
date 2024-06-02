import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../library/dummydate";
import "./listPage.scss";

function ListPage() {
  
  const data = listData
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} /> /* give the individual items from  ids */
          ))}
        </div>
      </div>
      <div className="mapContainer"> <Map items={data} /> </div>
    </div>
  )
}

export default ListPage