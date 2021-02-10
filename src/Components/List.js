import React from "react";


function grocerylist() {
  return (
    <ul className="list-group">
      { (item => (
        <li className="list-group-item" key={}>
          {}
        </li>
      ))}
    </ul>
  );
}

export default grocerylist;




// const fruit_list = [

//       {id: 4, article: "an", fruit_name: "apple"},
//       {id: 5, article: "an", fruit_name: "orange"},
//       {id: 6, article: "a", fruit_name: "pear"},
// ]

// const Fruit = ({article, fruit_name}) => <div> I am {article} {fruit_name} </div>

// function list() {
//   return (
//     // JSX. Can Only Display One Element At A Time // Multiple Elements
//     // In An Empty Div // Semantic HTML Is Beneficial When It Comes To Writing Components //
//     <>
//     {/* Temporary Variable used to go through each individual Fruit as it maps through */}
//     { fruit_list.map(fruit => <Fruit key={fruit.id} article={fruit.article} fruit_name={fruit.fruit_name} /> ) }

//     </>
//   );
// }

// export default list;
