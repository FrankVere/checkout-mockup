import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import valid from "card-validator";
import logo from "../src/Images/ideatheorem.png";
import visalogo from "../src/Images/visalogo.png";

const CheckoutPage = () => {
  const [selectYear, setSelectYear] = useState(false);
  const [selectMonth, setSelectMonth] = useState(false);

  const [ccInfo, setCCInfo] = useState();
  const [ccNum, setCCNum] = useState();
  const [ccYear, setCCYear] = useState();
  const [ccMonth, setCCMonth] = useState();
  const [cvv, setCVV] = useState();
  const [ccName, setCCName] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setCCInfo(valid.number(ccNum));
  }, [ccNum]);

  console.log(ccInfo);
  console.log(ccName);
  console.log(cvv);

  let yearArr = [];
  let monthArr = [];

  const currentYear = moment().format("YYYY");

  for (let i = currentYear; i <= parseInt(currentYear) + 10; i++) {
    yearArr.push(i);
  }

  for (let i = 1; i <= 12; i++) {
    monthArr.push(i);
  }
  console.log(valid.cardholderName(ccName));

  const onSubmitHandler = () => {
    setError("");
    const validName = valid.cardholderName(ccName);
    const validNum = valid.number(ccNum);
    const validMonth = valid.expirationMonth(ccMonth);
    const validYear = valid.expirationYear(ccYear);
    const validCVV = valid.cvv(cvv);
    console.log(validName);
    if (validName.isValid === false) {
      setError("Cardholder name is invalid!");
    } else if (validNum.isValid === false) {
      setError("Credit card number is invalid!");
    } else if (validYear.isValid === false) {
      setError("Expiry date is year invalid!");
    } else if (validMonth.isValid === false) {
      setError("Expiry date is month invalid!");
    } else if (validCVV.isValid === false) {
      setError("Cvv is invalid!");
    }
  };

  //   console.log(valid.number(ccNum));
  //   console.log(valid.expirationMonth(ccMonth));
  //   console.log(valid.expirationYear(ccYear));
  //   console.log(valid.cvv(cvv));

  return (
    <>
      <MainContainer>
        <Element1>
          <BlackFlexRow>
            <Image6 src={logo} />
          </BlackFlexRow>
        </Element1>
        <Element2>
          <FlexColumn>
            <Text1>Payment</Text1>
            <Element4>
              <FlexColumn1>
                <FlexColumn2>
                  <WhiteFlexRow1>
                    <FlexColumn3>
                      <InputText
                        disabled
                        placeholder={"We only accept Master Card and Visa"}
                      />
                      <FlexRow2 gap={"8px"}>
                        {ccInfo &&
                        ccInfo.card !== null &&
                        ccInfo.card.type &&
                        ccInfo.card.type === "mastercard" ? (
                          <SelectedCard>
                            <Left>
                              <Right
                                src={
                                  "https://file.rendit.io/n/j8ElVLhTAZ2AXEcjeFNr.svg"
                                }
                              />
                              <Middle
                                src={
                                  "https://file.rendit.io/n/uKIadkwzf8cadMgBnpV5.svg"
                                }
                              />
                            </Left>
                          </SelectedCard>
                        ) : (
                          <BASE>
                            <Left>
                              <Right
                                src={
                                  "https://file.rendit.io/n/j8ElVLhTAZ2AXEcjeFNr.svg"
                                }
                              />
                              <Middle
                                src={
                                  "https://file.rendit.io/n/uKIadkwzf8cadMgBnpV5.svg"
                                }
                              />
                            </Left>
                          </BASE>
                        )}
                        {ccInfo &&
                        ccInfo.card !== null &&
                        ccInfo.card.type &&
                        ccInfo.card.type === "visa" ? (
                          <SelectedCard>
                            <Visalogo src={visalogo} />
                          </SelectedCard>
                        ) : (
                          <MethodVisa>
                            <Visalogo src={visalogo} />
                          </MethodVisa>
                        )}
                      </FlexRow2>
                    </FlexColumn3>
                  </WhiteFlexRow1>
                  <FlexColumn4>
                    <TextField>
                      <Baseinputroot
                        required
                        type={"text"}
                        borderColor={"#a5b6cd"}
                        onChange={(e) => setCCName(e.target.value)}
                      />

                      <Baselabel>
                        <FlexRow2 gap={"2px"}>
                          <Label1 color={"#4d5c6f"}>Name on Card</Label1>
                          <Required>*</Required>
                        </FlexRow2>
                      </Baselabel>
                    </TextField>
                    <Element5>
                      <TextField1>
                        <Baseinputroot
                          type={"text"}
                          borderColor={"#a5b6cd"}
                          onChange={(e) => setCCNum(e.target.value)}
                        />
                        <Baselabel>
                          <FlexRow2 gap={"2px"}>
                            <Label1>Card Number</Label1>
                            <Required>*</Required>
                          </FlexRow2>
                        </Baselabel>
                      </TextField1>
                      <ErrorMessage>{error}</ErrorMessage>
                    </Element5>
                    <FlexRow5>
                      <Element6>
                        <Dropdown left={"-30px"}>
                          <FlexRow6>
                            <FlexRow2 gap={"2px"}>
                              {!selectMonth && (
                                <>
                                  {" "}
                                  Month
                                  <Required2>*</Required2>
                                </>
                              )}
                              <DropdownMenu
                                onClick={() => setSelectMonth(true)}
                                type={"select"}
                                required
                                onChange={(e) => setCCMonth(e.target.value)}
                              >
                                <option></option>
                                {monthArr.map((month) => (
                                  <option value={month} key={month}>
                                    {month}
                                  </option>
                                ))}
                              </DropdownMenu>
                            </FlexRow2>
                          </FlexRow6>
                        </Dropdown>
                        <Dropdown left={"130px"}>
                          <FlexRow6>
                            <FlexRow2 gap={"2px"}>
                              {!selectYear && (
                                <>
                                  {" "}
                                  Year
                                  <Required2>*</Required2>
                                </>
                              )}
                              <DropdownMenu
                                onClick={() => setSelectYear(true)}
                                type={"select"}
                                required
                                onChange={(e) => setCCYear(e.target.value)}
                              >
                                <option></option>
                                {yearArr.map((year) => (
                                  <option value={year} key={year}>
                                    {year}
                                  </option>
                                ))}
                              </DropdownMenu>
                            </FlexRow2>
                          </FlexRow6>
                        </Dropdown>
                      </Element6>
                      <TextField2>
                        <Baseinputroot2
                          required
                          type="number"
                          min="100"
                          max="999"
                          onChange={(e) => setCVV(e.target.value)}
                        />

                        <Baselabel>
                          <FlexRow2 gap={"2px"}>
                            <Label1 color={"#4d5c6f"}>CSC/CVV</Label1>
                            <Required>*</Required>
                          </FlexRow2>
                        </Baselabel>
                      </TextField2>
                    </FlexRow5>
                  </FlexColumn4>
                </FlexColumn2>
              </FlexColumn1>
              <FlexRow11>
                <Button>Back</Button>
                {ccMonth && ccNum && ccYear && ccName && cvv ? (
                  <Button onClick={onSubmitHandler}>Continue</Button>
                ) : (
                  <DisabledButton disabled>Continue</DisabledButton>
                )}
              </FlexRow11>
            </Element4>
          </FlexColumn>
        </Element2>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  height: 1024px;
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  gap: 183.1px;
  margin: auto;
  min-width: 1440px;
  align-items: center;
`;
const Element1 = styled.div`
  width: 1440px;
  height: 56.9px;
  position: relative;
`;

const BlackFlexRow = styled.div`
  width: 1108px;
  height: 32px;
  background-color: #252f3d;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 166px 12.9px 166px;
`;
const Image6 = styled.img`
  width: 294px;
  height: 32px;
`;
const Element2 = styled.div`
  height: 544px;
  position: relative;
  min-width: 1440px;
`;

const FlexColumn = styled.div`
  display: flex;
  position: absolute;
  left: 466px;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  padding: 0px 6px 0px 0px;
`;

const Text1 = styled.div`
  font-size: 20px;
  font-family: Lato;
  font-weight: 700;
  line-height: 30px;
  color: #2c3642;
  align-self: flex-start;
`;

const Element4 = styled.div`
  width: 502px;
  height: 499px;
  position: relative;
`;

const FlexColumn1 = styled.div`
  height: 495.66px;
  background-size: cover;
  position: absolute;
  top: -26px;
  left: -30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 26px 30px;
  background-image: url("https://file.rendit.io/n/Xl94iH5vtViPguOUAymD.svg");
`;

const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  justify-content: center;
  align-items: center;
`;
const WhiteFlexRow1 = styled.div`
  height: 75.8px;
  background-color: #fafafc;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 21px 43px 11.2px 37px;
`;

const FlexColumn3 = styled.div`
  width: 422px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InputText = styled.input`
  font-size: 16px;
  font-family: Lato;
  font-weight: 400;
  line-height: 24px;
  color: #2c3642;
  padding: 0px;
  border-width: 0px;
  background: none;
  width: 100%;
  display: inline-block;
  outline-width: 0px;
`;

const SelectedCard = styled.div`
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  height: 43.8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0px 9.85px 0px 8.75px;
`;

const BASE = styled.div`
  border-width: 1.54px;
  border-color: #d9d9d9;
  border-style: solid;
  height: 21.28px;
  background-color: #fafafc;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6.17px;
  padding: 6.45px 7.34px 6.17px 6.45px;
`;

const Left = styled.div`
  width: 35.51px;
  height: 21.28px;
  background-image: url("https://file.rendit.io/n/5JNVR1DmkfWTwiny0x6t.svg");
  background-size: cover;
  position: relative;
`;

const Right = styled.img`
  width: 17.75px;
  height: 21.28px;
  position: absolute;
  left: 17.75px;
`;

const Middle = styled.img`
  width: 7.57px;
  height: 16.2px;
  position: absolute;
  top: 2.54px;
  left: 13.97px;
`;

const MethodVisa = styled.div`
  border-width: 1.54px;
  border-color: #d9d9d9;
  border-style: solid;
  height: 21.28px;
  background-color: #fafafc;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6.17px;
  padding: 6.45px 7.34px 6.17px 6.45px;
`;

const Visalogo = styled.img`
  width: 50px;
  height: 40px;
`;

const FlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TextField = styled.div`
  width: 422px;
  height: 54px;
  position: relative;
`;

const Element5 = styled.div`
  width: 422px;
  height: 72px;
  position: relative;
`;

const TextField1 = styled.div`
  width: 422px;
  height: 54px;
  position: absolute;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  font-family: Lato;
  font-weight: 400;
  letter-spacing: 0.24px;
  line-height: 16px;
  color: #da1e28;
  position: absolute;
  top: 56px;
`;

const FlexRow5 = styled.div`
  width: 422px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 38px;
  align-items: center;
`;

const Element6 = styled.div`
  width: 126px;
  height: 54px;
  position: relative;
  flex-grow: 1;
`;

const TextField2 = styled.div`
  width: 124px;
  height: 54px;
  position: relative;
`;

const Baseinputroot = styled.input`
  border-width: 1px;
  border-style: solid;
  width: 393px;
  display: flex;
  position: absolute;
  top: 3px;
  left: -1px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 12px 13.5px;
  border-color: ${(props) => props.borderColor};
`;

const Baseinputroot2 = styled.input`
  border-width: 1px;
  border-color: #a5b6cd;
  border-style: solid;
  width: 95px;
  display: flex;
  position: absolute;
  top: 3px;
  left: -1px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 12px 13.5px;
`;

const FlexRow11 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 453px;
  left: 30px;
`;

const Button = styled.button`
  display: flex;
  font-size: 16px;
  font-family: Lato;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 20px;
  color: #4790a1;
  border-width: 1px;
  border-color: #4790a1;
  border-style: solid;
  width: 143px;
  height: 44px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 10px 32px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
`;

const DisabledButton = styled.button`
  display: flex;
  font-size: 16px;
  font-family: Lato;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 20px;
  color: #ffffff;
  width: 145px;
  height: 46px;
  background-color: #c7ccd2;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 11px 34px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
`;

const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Baselabel = styled.div`
  height: 2px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  top: 4px;
  left: 11px;
  padding: 0px 4px;
`;

const Label1 = styled.div`
  font-size: 12px;
  font-family: Lato;
  font-weight: 400;
  letter-spacing: 0.24px;
  line-height: 18px;
  background-color: white;
  color: ${(props) => props.color};
`;

const Required = styled.div`
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 18px;
  color: #cf4055;
  background-color: white;
`;

const DropdownMenu = styled.select`
  font-size: 18px;
  font-family: Lato;
  font-weight: 400;
  letter-spacing: 0.36px;
  line-height: 27px;
  color: #4d5c6f;
  padding: 0px;
  border-width: 0px;
  background: none;
  box-sizing: content-box;

  cursor: pointer;
`;

const Dropdown = styled.div`
  border-width: 1px;
  border-color: #a5b6cd;
  border-style: solid;
  width: 122px;
  height: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 3px;
  border-radius: 4px;
  padding: 7px 16px;
  left: ${(props) => props.left};
`;

const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  min-width: 92px;
`;

const Required2 = styled.div`
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 19px;
  color: #cf4055;
`;

export default CheckoutPage;
