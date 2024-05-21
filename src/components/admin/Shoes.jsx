import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Shoes = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>shoes</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/shoes/create-shoe")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Shoes;