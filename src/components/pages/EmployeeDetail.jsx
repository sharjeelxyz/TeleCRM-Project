import React from "react";
import { useOutletContext } from "react-router-dom";

const EmployeeDetail = () => {
  const { onToggleSidebar } = useOutletContext();

  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse
        consectetur nisi. Aut iure obcaecati nemo nostrum vero sit a laboriosam
        cupiditate voluptatum? Reprehenderit praesentium, explicabo iste, neque
        amet corrupti dignissimos veniam similique, quam laudantium fugit natus
        itaque architecto ex perferendis iure. Illum neque ipsa consequuntur
        numquam nobis commodi nostrum eum, eos omnis odit recusandae
        voluptatibus porro cum reprehenderit quisquam quas! Exercitationem saepe
        nisi minus numquam doloremque at quidem quae minima fugiat cum unde
        illum commodi, voluptate magni? Illum aut nihil, facilis pariatur facere
        minima eos quasi, accusamus velit illo in quo quam officia vitae a nulla
        ducimus ratione voluptatibus odit culpa commodi unde perspiciatis
        deleniti sit? Id nobis dolore maxime odio explicabo quod sed ab.
        Consequuntur nobis, eos maxime adipisci vero, distinctio, delectus
        asperiores recusandae sint ducimus qui molestias quas harum ipsam
        commodi quae earum omnis laboriosam? Cumque, perspiciatis. Animi beatae
        aspernatur qui nesciunt autem. Quae optio sint sequi veritatis, veniam
        rem aut mollitia odit ratione tempore! Ex sequi dolor unde saepe
        eligendi cum vel maxime incidunt! Voluptatem nobis at culpa. Vitae earum
        impedit, debitis ipsa architecto fugit voluptatem sequi ad, minima eos
        quam nam autem enim eum voluptatibus reiciendis dolor suscipit ex
        necessitatibus doloremque vel vero quis iusto.
      </h1>
      <h3 onClick={onToggleSidebar}>Click Me</h3>
    </div>
  );
};

export default EmployeeDetail;
