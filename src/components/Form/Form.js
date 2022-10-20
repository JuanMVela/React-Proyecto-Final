import React, { useState } from "react";
import { db } from "../../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import MessageSucess from "../../components/MessageSucess/MessageSucess";

const initialState = {
  name: "",
  lastname: "",
  phone: "",
};

const Form = ({ button }) => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();


    const docRef = await addDoc(collection(db, "purchasesID"), {
      values,
    });

    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div className=" bg-slate-100">
      <div class="flex items-center justify-center p-12">
        <div class="w-96 ml-20 mr-20">
          <form
            action="https://formbold.com/s/FORM_ID"
            method="POST"
            onSubmit={onSubmit}
            required
          >
            <div class="mb-5">
              <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={values.name}
                onChange={handleOnChange}
                required=""
              />
            </div>
            <div class="mb-5">
              <label
                for="lastname"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Apellido
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Lastname"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={values.lastname}
                onChange={handleOnChange}
                required=""
              />
            </div>
            <div class="mb-5">
              <label
                for="subject"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Numero de Telefono
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="phone"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0c0c0c] focus:shadow-md"
                value={values.phone}
                onChange={handleOnChange}
                required=""
              />
            </div>
            <div>
              <button class="hover:shadow-form rounded-md bg-[#000000] py-3 px-8 text-base font-semibold text-white outline-none">
                {button}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>{purchaseID && <MessageSucess purchaseID={purchaseID} />}</div>
    </div>
  );
};

export default Form;
