import "./MainStyle.css";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Card } from "primereact/card";
import "primeicons/primeicons.css";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Message } from "primereact/message";

const Cart = () => {
  //#region States
  const [addProduct, setAddProduct] = useState(false);
  const [savedData, setSavedData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    stock: "",
    price: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [dialogHeader, setDialogHeader] = useState("Add Product");
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState(null);
  const [showEmptyFieldsMessage, setShowEmptyFieldsMessage] = useState(false);

  //#region Functions
  const handleClick = () => {
    setAddProduct(!addProduct);
    setDialogHeader("Add Product");
    setFormData({
      name: "",
      brand: "",
      stock: "",
      price: "",
    });
  };
  const onChangeName = (event) => {
    setFormData((prevValue) => ({ ...prevValue, name: event.target.value }));
  };

  const onChangeBrand = (event) => {
    setFormData((prevValue) => ({ ...prevValue, brand: event.target.value }));
  };

  const onChangePrice = (event) => {
    setFormData((prevValue) => ({ ...prevValue, price: event.target.value }));
  };

  const onChangeStock = (event) => {
    setFormData((prevValue) => ({ ...prevValue, stock: event.target.value }));
  };
  const handleDeleteConfirm = (index) => {
    console.log("dd", index);
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept: () => handleDeleteProduct(index),
      reject: handleCancelDelete,
    });
  };

  const handleDeleteProduct = (index) => {
    console.log("index", index);
    const updatedData = [...savedData];
    updatedData.splice(index, 1);
    setSavedData(updatedData);
    setDeleteConfirmation(false);
  };
  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
  };
  const handleEditProduct = (index) => {
    const itemToEdit = savedData[index];

    if (itemToEdit) {
      setFormData(itemToEdit);
      setEditIndex(index);
      setDialogHeader("Edit Product");
      setAddProduct(true);
    } else {
      console.error("Item to edit not found at index:", index);
    }
  };

  // Save Product Function
  const handleSaveProduct = () => {
    if (
      formData.name === "" ||
      formData.brand === "" ||
      formData.price === "" ||
      formData.stock === ""
    ) {
      // alert("Please fill all Fields."); // chage this with prime react
      setShowEmptyFieldsMessage(true);

      return;
    }

    if (editIndex !== null) {
      console.log("in if");
      const updatedData = [...savedData];
      updatedData[editIndex] = formData;
      setSavedData(updatedData);
      setEditIndex(null);
    } else {
      setSavedData([...savedData, formData]);
      setShowEmptyFieldsMessage(false);
      console.log("else in");
    }

    setFormData({
      name: "",
      brand: "",
      stock: "",
      price: "",
    });
    setAddProduct(!addProduct);
  };

  return (
    <div className="Body">
      <div className="innerBox">
        <Card>
          <div className="mainHeader">
            <h3>PRODUCTS</h3>
            <div className="flex justify-content-end">
              <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText
                  type="search"
                  onInput={(e) => setGlobalFilterValue(e.target.value)}
                  placeholder="Search..."
                />
              </IconField>
            </div>
            <Button onClick={handleClick} label="Add Product" />
          </div>
         
        </Card>

        {/* Table */}
        <div className="card">
          <DataTable
            value={savedData}
            showGridlines
            globalFilter={globalFilterValue}
            tableStyle={{ minWidth: "20rem" }}
          >
            <Column
              field="SrNo."
              header="SrNo."
              body={(rowData, rowIndex) => <span>{rowIndex.rowIndex + 1}</span>}
            ></Column>
            <Column field="name" header="Name"></Column>
            <Column field="brand" header="Brand"></Column>
            <Column field="price" header="Price"></Column>
            <Column field="stock" header="Stock"></Column>
            <Column
              field="Action"
              header="Action"
              body={(rowData, rowIndex) => (
                <div className="Buttons">
                  <Button
                    onClick={() => handleDeleteConfirm(rowIndex.rowIndex)}
                    label="Delete"
                  />
                  <Button
                    onClick={() => handleEditProduct(rowIndex.rowIndex)}
                    label="Edit"
                  />
                </div>
              )}
            ></Column>
          </DataTable>
        </div>
      </div>
      <ConfirmDialog />

      {/* Add Product Dialog */}
      {addProduct && (
        <Dialog
          header={dialogHeader}
          visible={addProduct}
          onHide={() => setAddProduct(false)}
        >
            {showEmptyFieldsMessage && (
            <Message severity="error" text="Please fill all fields." />
          )}
          <div className="inputFields">
            <FloatLabel>
              <InputText
                id="Name"
                value={formData.name}
                onChange={onChangeName}
              />
              <label for="username">Name</label>
            </FloatLabel>
          </div>
          <div className="inputFields">
            <FloatLabel>
              <InputText
                id="Brand"
                value={formData.brand}
                onChange={onChangeBrand}
              />
              <label for="username">Brand</label>
            </FloatLabel>
          </div>
          <div className="inputFields">
            <FloatLabel>
              <InputText
                id="Price"
                value={formData.price}
                onChange={onChangePrice}
              />
              <label for="username">Price</label>
            </FloatLabel>
          </div>
          <div className="inputFields">
            <FloatLabel>
              <InputText
                id="Stock"
                value={formData.stock}
                onChange={onChangeStock}
              />
              <label for="username">Stock</label>
            </FloatLabel>
          </div>
          <div className="Buttons">
            <Button onClick={handleSaveProduct} label="Save" />
            <Button style={{backgroundColor:"red"}} onClick={handleClick} label="Cancel" />
          
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Cart;
