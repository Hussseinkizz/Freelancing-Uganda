// This page is for testing newly created components since we don't want to rewire routing everytime!
import JobPostForm from '../components/Forms/JobPostForm';
import Modal from '../components/Modal/useModal';

const testComponentsPage = () => {
  return (
    <>
      {/* import and test any component */}
      <div className="container m-3">
        {/* <JobForm /> */}
        something on page
        <Modal
          label="New modal"
          modalColor="blue"
          title="Post A New Job"
          content={<JobPostForm />}
          action="post"
        />
      </div>
    </>
  );
};

export default testComponentsPage;
