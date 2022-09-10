import Modal from 'react-modal';
import React, { useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';




export default function ModalContact(props) {

  console.log("porps", props)
  const show = props.show;
  const exit = props.exit;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = toast.loading("Please wait...");
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    exit();
    const res = await fetch('/api/project', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then((response) => {
      if (response.ok) {
        toast.update(id, { render: "We receved your Message", type: "success", isLoading: false, autoClose: true });
      }
    }).catch((error) => {
      toast.update(id, { render: "All is Erorr", type: "danger", isLoading: false, autoClose: true });
    });




  };
  return (
    <div>
      <Modal
        isOpen={show}
        contentLabel="onRequestClose Example"
        onRequestClose={exit}
        ariaHideApp={false}
        className="dialog-input open aside"
        overlayClassName="Overlay"
      >
        <div className='container-modal open '>




          <div className="d-flex p-2 bg-light border-1 border-bottom">
            <div className="align-items-start">
              <button onClick={exit} type="button" className="btn btn-default btn-toolbar">{'close'}</button>
            </div>

          </div>




          <form className='form-contact p-4' onSubmit={handleSubmit}>

            <fieldset>
              <div class="mb-3">
                <label id="name" class="form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address or Phone number</label>
                <input type="text" class="form-control" name='email' id='email' required />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="comment" class="form-label">Comment</label>
                <textarea rows={4} class="form-control" id='comment' name='comment' required></textarea>
              </div>

            </fieldset>

            <button className='btn btn-warning'>Send</button>

          </form>


        </div>

      </Modal>
    </div>
  );

}