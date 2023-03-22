import { IconContext } from "react-icons";
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({title,total,icon}) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ size:40}}>
    {icon}
    </IconContext.Provider>
    <StatisticCounter>{total}</StatisticCounter>
    <StatisticText>{title}</StatisticText>
  </StatisticBox>
  )
};
