import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUsers, FaClipboard, FaChartBar } from "react-icons/fa";
import Widget from "./summary-components/Widget";
import axios from "axios";
import { url, setHeaders } from "../../features/api";
import Chart from "./summary-components/Chart";
import Transactions from "./summary-components/Transactions";
import AllTimeData from "./summary-components/AllTimeData";

const Summary = () => {
  const [users, setUsers] = useState([]);
  const [usersPerc, setUsersPerc] = useState(0);
  const [orders, setOrders] = useState([]);
  const [ordersPerc, setOrdersPerc] = useState(0);
  const [income, setIncome] = useState([]);
  const [incomePerc, setIncomePerc] = useState(0);

  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    async function fetchUsersData() {
      try {
        const res = await axios.get(`${url}/users/stats`, setHeaders());
        res.data.sort(compare);
        setUsers(res.data);
        if (res.data.length >= 2) {
          setUsersPerc(
            ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
          );
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchUsersData();
  }, []);

  useEffect(() => {
    async function fetchOrdersData() {
      try {
        const res = await axios.get(`${url}/orders/stats`, setHeaders());
        res.data.sort(compare);
        setOrders(res.data);
        if (res.data.length >= 2) {
          setOrdersPerc(
            ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
          );
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchOrdersData();
  }, []);

  useEffect(() => {
    async function fetchIncomeData() {
      try {
        const res = await axios.get(`${url}/orders/income/stats`, setHeaders());
        res.data.sort(compare);
        setIncome(res.data);
        if (res.data.length >= 2) {
          setIncomePerc(
            ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
          );
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchIncomeData();
  }, []);

  const data = [
    {
      icon: <FaUsers />,
      digits: users[0]?.total || 0,
      isMoney: false,
      title: "Users",
      color: "rgb(102, 108, 255)",
      bgcolor: "rgba(102, 108,255, 0.12)",
      percentage: usersPerc || 0
    },
    {
      icon: <FaClipboard />,
      digits: orders[0]?.total || 0,
      isMoney: false,
      title: "Orders",
      color: "rgb(38, 198, 249)",
      bgcolor: "rgba(38, 198, 249, 0.12)",
      percentage: ordersPerc || 0
    },
    {
      icon: <FaChartBar />,
      digits: income[0]?.total ? income[0]?.total / 100 : 0,
      isMoney: true,
      title: "Earnings",
      color: "rgb(253, 181, 40)",
      bgcolor: "rgba(253, 181, 40, 0.12)",
      percentage: incomePerc || 0
    }
  ];

  return (
    <StyledSummary>
      <MainStats>
        <Overview>
          <Title>
            <h2>Overview</h2>
            <p>How your shop is performing compared to the previous month</p>
          </Title>
          <WidgetWrapper>
            {data?.map((dataItem, index) => (
              <Widget key={index} data={dataItem} />
            ))}
          </WidgetWrapper>
        </Overview>
        <Chart />
      </MainStats>
      <SideStates>
        <Transactions />
        <AllTimeData />
      </SideStates>
    </StyledSummary>
  );
};

export default Summary;

const StyledSummary = styled.div`
  width: 100%;
  display: flex;
`;

const MainStats = styled.div`
  flex: 2;
  width: 100%;
`;

const Title = styled.div`
  p {
    font-size: 14px;
    color: rgba(234, 234, 255, 0.68);
  }
`;

const Overview = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  width: 100%;
  padding: 1.5rem;
  height: 170px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WidgetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SideStates = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;
`;
