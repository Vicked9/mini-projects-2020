import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { deleteProfessorById, getProfessorById } from "../../services/professorsService";

function DeleteProfessorPage({ match }) {

  let history = useHistory();

  const [professor, setProfessor] = useState({
    professorId: "",
    name: "",
    doj: (new Date()).toISOString().slice(0, 10).replace(/-/g, "-").replace("T", " "),
    teaches: "C#",
    salary: 0.0,
    isPhd: false
  });

  useEffect(() => {
    getProfessorById(match.params.professorId)
      .then(_professor => setProfessor(_professor));
  }, [match.params.professorId]);

  function handleDeleteProfessorSubmit(event) {
    event.preventDefault();
    deleteProfessorById(match.params.professorId)
      .then(_ => {
        history.push('/professors');
        toast.success("Professor Deleted.");
      })
      .catch(_ => {
        toast.error("Error deleting Professor");
      });
  }

  function handleFormChange({ target }) {
    setProfessor({
      ...professor,
      [target.name]: target.value
    });
  }

  return (
    <div className="card shadow mt-2 mb-2">
      <div className="card-header">
        <h2 className="PageTitle">Delete Book</h2>
      </div>
      <div className="card-body">
        <div className="col-md-8 mb-4">
          <form>
            <div className="form-group divflex labelAndTextbox">
              <label className="element col-md-2">Id : </label>
              <input type="text" name="title" readOnly className="form-control element ml-4" maxLength="100"
                onChange={handleFormChange} value={professor.professorId} />
            </div>

            <div className="form-group divflex labelAndTextbox">
              <label className="element col-md-2">Name : </label>
              <input type="text" name="title" readOnly className="form-control element ml-4" maxLength="100"
                onChange={handleFormChange} value={professor.name} />
            </div>

            <div className="form-group divflex labelAndTextbox">
              <label className="element col-md-2">DOJ: </label>
              <input type="date" name="dateOfPublish" readOnly className="form-control element ml-4"
                onChange={handleFormChange} value={new Date(professor.doj).toISOString().slice(0, 10).replace(/-/g, "-").replace("T", " ")} />
            </div>

            <div className="form-group divflex labelAndTextbox">
              <label className="element col-md-2">Teaches : </label>
              <input type="text" name="title" readOnly className="form-control element ml-4" maxLength="100"
                onChange={handleFormChange} value={professor.teaches} />
            </div>

            <div className="form-group divflex labelAndTextbox">
              <label className="element col-md-2">Salary : </label>
              <input type="text" name="title" readOnly className="form-control element ml-4" maxLength="100"
                onChange={handleFormChange} value={professor.salary} />
            </div>

            <div className="form-group divflex labelAndTextbox">
              <label className="element col-md-2">Is Phd: </label>
              <div class="col-sm-1">
                <input type="checkbox" class="form-control element ml-2" checked={professor.isPhd} readOnly />
              </div>
            </div>
          </form>
          <Link to="" onClick={handleDeleteProfessorSubmit} type="submit" className="btn btn-danger btn-sm ml-2 shadow mr-2">
            <i className="fa fa-trash" aria-hidden="true"></i> Delete</Link>
          <Link to="/professors" className="btn btn-maincolor btn-sm ml-2 shadow">
            <i className="fa fa-list" aria-hidden="true"></i> Books List</Link>

        </div>
      </div>
    </div>
  );
}

export default DeleteProfessorPage;
