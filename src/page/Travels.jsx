import travels from "../data/travels.json";
import Cards from "../components/Cards";

const Travels = ({ setCounter, updateData }) => {
  return (
    <div className="container columns">
      {travels.map((data, index) => (
        <Cards
          key={index}
          only={`${index}-key`}
          data={data}
          setCounter={setCounter}
          onClick={updateData}
        />
      ))}
    </div>
  );
};

export default Travels;
