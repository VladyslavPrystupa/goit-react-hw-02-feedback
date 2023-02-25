import { BtnList } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map((btnName, index) => {
        return (
          <li key={index}>
            <button type="button" value={btnName} onClick={onLeaveFeedback}>
              {btnName}
            </button>
          </li>
        );
      })}
    </BtnList>
  );
};
