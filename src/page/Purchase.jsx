import ButtonIcon from "../components/ButtonIcon";

const Purchase = ({ data, deleteData }) => {
  let total = 0;
  return (
    <div>
      <div className="card container text-align-right">
        <table>
          <thead>
            <tr>
              <th>
                <div className="text-color-gray">Producto</div>
              </th>
              <th>
                <div className="text-color-gray">Cantidad</div>
              </th>
              <th>
                <div className="text-color-gray">Precio</div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((d, index) => {
              const subtotal = d.count * d.data.cost;
              total += subtotal;
              return (
                <tr key={index}>
                  <td>
                    <div className="flex gap-5">
                      <img
                        className="imgContentP"
                        src={process.env.PUBLIC_URL + d.data.image}
                        alt="imagen"
                        width={"15%"}
                      />
                      <div className="text-bold">
                        <div>{d.data.name}</div>
                        <div>R$ {d.data.cost}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="border">{d.count}</div>
                  </td>
                  <td>
                    <strong>$ {subtotal}</strong>
                  </td>
                  <td>
                    <ButtonIcon onClick={() => deleteData(d.data.id)}>
                      <img src="./images/trash.png" alt="trash" />
                    </ButtonIcon>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="text-color-gray mt-10">
          Total{" "}
          <strong className="text-color-black text-large">$ {total}</strong>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
