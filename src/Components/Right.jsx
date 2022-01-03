import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Item = styled.div`
    flex: 1;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-image: radial-gradient(
        circle,
        #2d4778,
        #275b86,
        #2c6e90,
        #3c8198,
        #53939f
    );
    color:white;
`;
const SearchContainer = styled.div`
    /* width: 100%; */
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
`;
const Input = styled.input`
    flex: 6;
    width: 100%;
    padding: 10px 30px;
`;
const Button = styled.button`
    flex: 1;
    width: 50%;
    margin: 0 10px;
    padding: 10px 30px;
    height: 40px;
    background-color: #5ee9cb;
    outline: none;
    border: 1px solid transparent;
`;
const CityContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;

    justify-content: center;
    /* padding: 0 20px ; */
    align-items: center;
    /* margin: 0 auto; */
`;
const City = styled.h3`
    margin: 5px auto;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    /* width: 100%; */
    /* border-bottom: 1px solid black; */
`;
const WeatherDetailsContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
`;
const Title = styled.h2`
    margin-bottom: 20px;
`;
const PropertyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    align-items: center;
`;
const Property = styled.p`
    margin: 10px 10px;
    font-size: 1.6rem;
    font-weight: 300;
`;
const Percent = styled.h4`
    margin: 10px 10px;
    font-size: 1.6rem;
    font-weight: 300;
`;

const StatusContainer = styled.div`
    flex: 4;
    background-color: blue;
    width: 100%;
`;

const Right = () => {
    return (
        <Item>
            <SearchContainer>
                <Input />
                <Button>
                    <SearchIcon />
                </Button>
            </SearchContainer>
            <CityContainer>
                <City>London</City>
                <City>London</City>
                <City>London</City>
                <City>London</City>
            </CityContainer>
            <WeatherDetailsContainer>
                <Title>Weather Details</Title>
                <PropertyContainer>
                    <Property>Cloudy</Property>
                    <Percent>85%</Percent>
                </PropertyContainer>
                <PropertyContainer>
                    <Property>Cloudy</Property>
                    <Percent>85%</Percent>
                </PropertyContainer>
                <PropertyContainer>
                    <Property>Cloudy</Property>
                    <Percent>85%</Percent>
                </PropertyContainer>
            </WeatherDetailsContainer>
            <StatusContainer>hi</StatusContainer>
        </Item>
    );
};

export default Right;
