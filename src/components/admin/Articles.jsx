import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Articles = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Articles</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/articles/create-article")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Articles;