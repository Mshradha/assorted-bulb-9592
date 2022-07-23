import React from "react";
import styles from "./Middle.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";

const Serviceable = () => {
  const cities = [
    { id: 1, cities: "Bangalore" },
    { id: 2, cities: "Hydrebad" },
    { id: 3, cities: "Mumbai" },
    { id: 4, cities: "Delhi-NCR" },
    { id: 5, cities: "Chennai" },
    { id: 6, cities: "Pune" },
    { id: 7, cities: "Kolkata" },
    { id: 8, cities: "Ahmedabad" },
  ];
  const row2 = [
    { city: "Bhubaneswar" },
    { city: "Chandigrah" },
    { city: "Coimbatore" },
    { city: "Jaipur" },
    { city: "Kochi" },
    { city: "Mangalore" },
    { city: "Mysore" },
    { city: "Nagpur" },
  ];
  var row3 = [
    { citi: "Surat" },
    { citi: "Tirupati" },
    { citi: "Trivandrum" },
    { citi: "Vadodara" },
    { citi: "Vijaywada" },
    { citi: "Vizag" },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "450px",
        border: "1px solid black",
        backgroundColor: "#2a2b36",
      }}
    >
      <Box margin="auto" width="90%" height="90%" backgroundColor="#2a2b36">
        <Box p="4" backgroundColor="#2a2b36">
          <Text
            fontSize="3xl"
            fontFamily="Poppins"
            color="white"
            fontWeight="600"
            backgroundColor="#2a2b36"
            marginLeft='-30px'
          >
            Serviceable cities
          </Text>
        </Box>
        <Flex width="100%" backgroundColor="#2a2b36">
          <Box width="33%" backgroundColor="#2a2b36" >
            {cities.map((el) => {
              return (
                <ul>
                  <li className={styles.nameshra} style={{}}>
                    {`Self Drive Car Rental in  ${el.cities}`}
                  </li>
                </ul>
              );
            })}
          </Box>
          <Box width="33%" backgroundColor="#2a2b36" >
            {row2.map((el) => {
              return (
                <ul>
                  <li className={styles.nameshra}>
                    {`Self Drive Car Rental in  ${el.city}`}
                  </li>
                </ul>
              );
            })}
          </Box>
          <Box width="33%" backgroundColor="#2a2b36">
            {row3.map((el) => {
              return (
                <ul>
                  <li className={styles.nameshra}>
                    {`Self Drive Car Rental in  ${el.citi}`}
                  </li>
                </ul>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Serviceable;
