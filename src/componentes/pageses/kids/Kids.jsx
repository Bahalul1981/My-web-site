import Header from "../../header/Header";

export const Kids = () => {
  const deleteiteam = [
    { name: "bahalul", age: 32, ocupation: "It" },
    { name: "alvin", age: 1, ocupation: "Not yet" },
    { name: "Farhana", age: 32, ocupation: "teacher" },
  ];
  const deleteiteams = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Header />
      {deleteiteam.map((elem, id) => {
        return (
          <div key={id}>
            <h2>
              Name: {elem.name}
              <br />
              Age: {elem.age}
              <br />
              Occupation: {elem.ocupation}
              <button onClick={() => deleteiteams(elem)}>Delete</button>
            </h2>
          </div>
        );
      })}
    </div>
  );
};
