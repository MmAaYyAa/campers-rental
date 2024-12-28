import styled from 'styled-components';

export const StyledDatePickerWrapper = styled.div`
  .react-datepicker {
    max-width: 276px;
    border: 1px solid var(--text);
    border-radius: 12px;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
  }

  .react-datepicker__triangle {
    border-radius: 2px;
    fill: var(--white) !important;
  }

  .react-datepicker__header {
    background-color: var(--white);
    border-bottom: 1px solid var(--text);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 12px;
  }

  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 14.5px;
  }

  .react-datepicker__day {
    display: inline-block;
    width: 36px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 14px;
    color: var(--main);
    border-radius: 32px;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day:hover {
    background-color: var(--text) !important;
    color: var(--gray-light) !important;
  }

  .react-datepicker__day--outside-month {
    color: var(--text);
  }

  .today {
    background-color: var(--text);
    color: var(--gray-light);
  }
`;
