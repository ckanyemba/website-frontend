import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const NewThriftCollections = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Thrift Collections</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/newthriftCollections/create-thriftCollection")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default NewThriftCollections;
