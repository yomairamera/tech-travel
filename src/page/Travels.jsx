import travels from "../data/travels.json";
import Cards from "../components/Cards";

const Travels = ({ setCounter }) => {
  return (
    <div className="container columns">
      {travels.map((data, index) => (
        <Cards
          key={index}
          only={`${index}-key`}
          data={data}
          setCounter={setCounter}
        />
      ))}
    </div>
  );
};

export default Travels;
