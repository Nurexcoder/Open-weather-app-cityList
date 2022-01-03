import styled from "styled-components";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";


const Item = styled.div`
    flex: 3;
    /* background-color: black; */
    background-image: linear-gradient(
        to left bottom,
        #16303b,
        #1b495c,
        #1f6380,
        #257da7,
        #2f99cf
    );
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
const CurrentWeatherBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 90px 0;
    height: 15vh;
    `;
const Degree = styled.h3`
    margin: 0 20px;
    font-weight: 400;
    font-size: 6rem;

    `;
const CurrentDetailsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;
const TimeContainer = styled.h3`
    display: flex;
    flex-direction: row;
    align-items: center;

`;
const City = styled.h3`
    font-size:3.5rem;
`;
const Time = styled.h3`
    margin: 0;
`;
const Day = styled.h3`
    margin: 0;
`;
const Date = styled.h3`
    margin: 0;
`;
const WeatherDetail = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    margin: 0 20px;

    /* float: bottom; */
    /* justify-content: flex-end; */
    /* margin-bottom: 5px 0; */
`;

const P = styled.p`
    margin: 0;
    `;
const Weather = styled.h3`
    font-size: 3rem;
    `
const CloudyIcon= styled(WbCloudyIcon)`
     transform: scale(2);
     `
const Icon = styled.span`
    
    `;
const PrevWeatherBox = styled.div`
    margin: 0;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    
    `;
const DayContainer= styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin:0 10px;
    background-color: #008069;
    border-radius: 20px;
    `
    const PrevDegree = styled(Degree)`
        margin: 0 20px;
        font-weight: 400;
        font-size: 3rem;
    
        `;
const WeatherDay = styled.h4`
    font-size:2rem;
`;
// const Re
const Left = () => {
    return (
        <Item>
            <CurrentWeatherBox>
                <Degree>16°</Degree>
                <CurrentDetailsBox>
                    <City>London</City>
                    <TimeContainer>
                        <Time>06:09</Time>
                        <P>-</P>
                        <Day>Monday</Day>
                        <P>,</P>
                        <Date>19 Sep'20</Date>
                        
                    </TimeContainer>
                </CurrentDetailsBox>
                <WeatherDetail>
                            <CloudyIcon />
                            <Weather>Cloudy</Weather>
                        </WeatherDetail>
            </CurrentWeatherBox>
            <PrevWeatherBox>
                <DayContainer>
                    <WeatherDay>
                                Monday
                    </WeatherDay>
                    <PrevDegree>16°</PrevDegree>
                <CurrentDetailsBox>
                    
                <WeatherDetail>
                            <CloudyIcon />
                            <Weather>Cloudy</Weather>
                        </WeatherDetail>
                </CurrentDetailsBox>
                </DayContainer>
                <DayContainer>
                    <WeatherDay>
                                Monday
                    </WeatherDay>
                    <PrevDegree>16°</PrevDegree>
                <CurrentDetailsBox>
                    
                <WeatherDetail>
                            <CloudyIcon />
                            <Weather>Cloudy</Weather>
                        </WeatherDetail>
                </CurrentDetailsBox>
                </DayContainer>
                <DayContainer>
                    <WeatherDay>
                                Monday
                    </WeatherDay>
                    <PrevDegree>16°</PrevDegree>
                <CurrentDetailsBox>
                    
                <WeatherDetail>
                            <CloudyIcon />
                            <Weather>Cloudy</Weather>
                        </WeatherDetail>
                </CurrentDetailsBox>
                </DayContainer>
                <DayContainer>
                    <WeatherDay>
                                Monday
                    </WeatherDay>
                    <PrevDegree>16°</PrevDegree>
                <CurrentDetailsBox>
                    
                <WeatherDetail>
                            <CloudyIcon />
                            <Weather>Cloudy</Weather>
                        </WeatherDetail>
                </CurrentDetailsBox>
                </DayContainer>
            </PrevWeatherBox>
        </Item>
    );
};

export default Left;
