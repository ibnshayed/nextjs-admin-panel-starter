import CheckboxForm from "@/components/forms/CheckboxForm";
import SuperAdminCreateForm from "@/components/forms/SuperAdminCreateForm";
import PageWrapper from "@/components/header/PageWrapper";

const SuperAdminCreatePage = () => {
  return (
    <PageWrapper name="Super Admin Create">
      <div className="p-5">
				<SuperAdminCreateForm />
      </div>
    </PageWrapper>
  );
};

export default SuperAdminCreatePage;
