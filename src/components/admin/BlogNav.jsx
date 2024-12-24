import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const BlogNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Blogs</h2>
        <PrimaryButton onClick={() => navigate("/admin/nav-blog/create-blog")}>
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default BlogNav;
