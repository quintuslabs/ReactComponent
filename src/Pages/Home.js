import React, { Component } from "react";
import TextInput from "../Components/TextInput/TextInput";
import TextInputArea from "../Components/TextInputArea/TextInputArea";
import FloatingTextInput from "../Components/FloatingTextInput/FloatingTextInput";
import Button from "../Components/Button/Button";
import LoadingButton from "../Components/LoadingButton/LoadingButton";
import Select from "../Components/Select/Select";
import CheckBox from "../Components/CheckBox/CheckBox";
import RadioGroup from "../Components/RadioGroup/RadioGroup";
import FloatingButton from "../Components/FloatingButton/FloatingButton";
import SideSlide from "../Components/Menu/SideSlide";
import DropDownSlide from "../Components/Menu/DropDownSlide";
import MegaMenu from "../Components/Menu/MegaMenu";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      dob: "",
      time: "",
      password: "",
      floatingText: "",
      textInputArea: "",
      ageRange: "",
      ageOptions: [],
      selectedCheckBox: [],
      pets: "",
      radioCheck: "",
      loading: false,

      otp: "",
      numInputs: 6,
      separator: "",
      isDisabled: false,
      hasErrored: false,
      isInputNum: false,

      menuOption: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxSelection = this.handleCheckBoxSelection.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    console.log(value);
  }
  handleOtpChange = otp => {
    this.setState({ otp });
  };

  handleCheck = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: !prevState[name] }));
  };
  handleCheckBoxSelection(e) {
    const newSelection = e.target.value;
    let newSelectionArray;
    if (this.state.selectedCheckBox.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedCheckBox.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.selectedCheckBox, newSelection];
    }
    this.setState({ selectedCheckBox: newSelectionArray }, () =>
      console.log("pet selection", this.state.selectedCheckBox)
    );
  }

  handleSubmit = () => {
    alert("Hii I am Buttoon");
  };
  openSideSlide = () => {
    this.setState({ menuOption: "openSlide" });
  };

  openDropDown = () => {
    this.setState({ menuOption: "openDropDown" });
  };

  handleFloatSubmit = () => {
    alert("Hii I am Floating Buttoon");
  };

  handleLoadingButton = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <div className="row" style={{ display: "flex", flexDirection: "column" }}>
        <SideSlide menuOption={this.state.menuOption} />
        <DropDownSlide menuOption={this.state.menuOption} />
        <MegaMenu />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "33%",
              padding: "5vw"
            }}
          >
            <TextInput
              inputType={"text"}
              name={"name"}
              label={"Text Input Label"}
              controlFunc={this.handleChange}
              value={this.state.name}
              placeholder={"Enter Full Name"}
              className={"form-control"}
              groupClassName={"form-group"}
              labelClassName={"form-label"}
            />
            <TextInput
              inputType={"number"}
              name={"mobile"}
              label={"Number Input Label"}
              controlFunc={this.handleChange}
              value={this.state.mobile}
              placeholder={"Enter Mobile Number"}
              className={"form-control"}
              groupClassName={"form-group"}
              labelClassName={"form-label"}
            />
            <TextInput
              inputType={"email"}
              name={"email"}
              label={"Email Input Label"}
              controlFunc={this.handleChange}
              value={this.state.email}
              placeholder={"Enter Email Address"}
              className={"form-control"}
              groupClassName={"form-group"}
              labelClassName={"form-label"}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  marginRightL: 5
                }}
              >
                <TextInput
                  inputType={"date"}
                  name={"dob"}
                  label={"Date Input Label"}
                  controlFunc={this.handleChange}
                  value={this.state.dob}
                  placeholder={"Enter Date of Birth"}
                  className={"form-control"}
                  groupClassName={"form-group"}
                  labelClassName={"form-label"}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  marginLeft: 5
                }}
              >
                <TextInput
                  inputType={"time"}
                  name={"time"}
                  label={"Time Input Label"}
                  controlFunc={this.handleChange}
                  value={this.state.time}
                  placeholder={"Enter Time of Birth"}
                  className={"form-control"}
                  groupClassName={"form-group"}
                  labelClassName={"form-label"}
                />
              </div>
            </div>
            <TextInput
              inputType={"password"}
              name={"password"}
              label={"Password Input Label"}
              controlFunc={this.handleChange}
              value={this.state.password}
              placeholder={"Enter Password"}
              className={"form-control"}
              groupClassName={"form-group"}
              labelClassName={"form-label"}
            />
            <FloatingTextInput
              inputType={"text"}
              name={"floatingText"}
              label={"Floating Text"}
              controlFunc={this.handleChange}
              value={this.state.floatingText}
            />
            <TextInputArea
              label={"Text Input Area Label"}
              rows={5}
              resize={true}
              value={this.state.textInputArea}
              name={"textInputArea"}
              controlFunc={this.handleChange}
              placeholder={"Please be thorough in your descriptions"}
            />

            <Button
              type={"button"}
              title={"Button"}
              onClick={() => this.handleSubmit()}
              className={"button button-secondary button-sm"}
            ></Button>

            <LoadingButton
              type={"button"}
              title={"Loading Button"}
              onClick={() => this.handleLoadingButton()}
              loading={this.state.loading}
              className={"button button-secondary button-sm"}
            ></LoadingButton>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "33%",
              padding: "5vw"
            }}
          >
            <Select
              label={"Select label"}
              name={"ageRange"}
              placeholder={"Choose your age range"}
              controlFunc={this.handleChange}
              options={ageOptions}
              selectedOption={this.state.ageRange}
            />

            <CheckBox
              label={"Which kinds of pets would you like to adopt?"}
              setName={"pets"}
              type={"checkbox"}
              controlFunc={this.handleCheckBoxSelection}
              options={checkBoxOptions}
              selectedOptions={this.state.selectedCheckBox}
            />
            <RadioGroup
              label={
                "Are you willing to adopt more than one pet if we have siblings for adoption?"
              }
              setName={"radioCheck"}
              controlFunc={this.handleChange}
              options={checkBoxOptions}
              selectedOptions={this.state.radioCheck}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "33%",
              padding: "5vw"
            }}
          >
            <button className="btn01" onClick={() => this.openSideSlide()}>
              Side Slide
            </button>
            <button className="btn02" onClick={() => this.openDropDown()}>
              Drop down
            </button>
          </div>

          <FloatingButton onClick={() => this.handleFloatSubmit()} />
        </div>
      </div>
    );
  }
}

export default Index;

const ageOptions = ["1-5", "5-10", "10-15"];
const checkBoxOptions = ["1", "2", "3", "4"];
