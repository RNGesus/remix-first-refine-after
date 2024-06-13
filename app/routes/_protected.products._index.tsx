import { Authenticated, useTable } from "@refinedev/core";

function ProductsList() {
  const { tableQueryResult } = useTable();

  return (
    <Authenticated key="auth-fallback" fallback={<p>not allowed!</p>}>
      <h1>Products!</h1>
      <pre>{JSON.stringify(tableQueryResult.data, null, 2)}</pre>
    </Authenticated>
  );
}

export default ProductsList;
