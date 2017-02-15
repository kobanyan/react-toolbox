import React, { Component, PropTypes } from 'react';
import getPassThrough from '../../utils/getPassThrough';

const dayFactory = ({
  DayNode,
  passthrough,
}) => {
  const passProps = getPassThrough(passthrough);
  class Day extends Component {
    static propTypes = {
      blocked: PropTypes.bool,
      day: PropTypes.number,
      disabled: PropTypes.bool,
      highlighted: PropTypes.bool,
      inRange: PropTypes.bool,
      onClick: PropTypes.func,
      onMouseEnter: PropTypes.func,
      outOfMonth: PropTypes.bool,
      selected: PropTypes.bool,
      today: PropTypes.bool,
    };

    handleClick = (event) => {
      const { day, disabled, onClick } = this.props;
      if (!disabled && onClick) {
        onClick(day, event);
      }
    };

    handleMouseEnter = () => {
      const { day, disabled, onMouseEnter } = this.props;
      if (!disabled && onMouseEnter) {
        onMouseEnter(day, event);
      }
    };

    render() {
      const {
        blocked,
        day,
        disabled,
        highlighted,
        inRange,
        onClick,      // eslint-disable-line
        onMouseEnter, // eslint-disable-line
        outOfMonth,
        selected,
        today,
        ...others
      } = this.props;

      return (
        <DayNode
          {...others}
          {...passProps(this.props, 'DayNode')}
          blocked={blocked}
          disabled={disabled}
          highlighted={highlighted}
          inRange={inRange}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          outOfMonth={outOfMonth}
          selected={selected}
          today={today}
        >
          {day}
        </DayNode>
      );
    }
  }

  return Day;
};

export default dayFactory;
