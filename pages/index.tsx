
export default function Home() {

  const handleButtonListClick = function() {

    const requestData = {
      query: `
      query {
        foods {
          id
          Name
          Description
          Country
          Price
        }
      }
      `
    };

    fetch(`http://localhost:3000/api/foods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData),
    }).then((response) => response.json()).then((data) => console.log(data))
  }

  const handleButtonAddClick = function() {
    fetch(" http://localhost:3000/api/food",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name : "name", description : "description", price : 120, country : "country" }),
    }).then((response) => response.json()).then((data) => console.log(data))
  }

  return (
    <>
      <button onClick={handleButtonListClick}>list</button>
      <button onClick={handleButtonAddClick}>add</button>
    </>
  );
}
