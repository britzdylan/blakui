import { addPropertyControls, ControlType } from 'framer';

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function AspectRatio(props) {
  const styles = {
    height: 'auto',
    border: props.Debug ? '1px solid red' : 'none',
    aspectRatio: `${props.RatioWidth} / ${props.RatioHeight} auto`,
    width: `${props.Width}px`,
  };

  return <div style={styles}>{props.ComponentInstance}</div>;
}

const ratioControls = {
  type: ControlType.Number,
  min: 0,
  displayStepper: true,
  step: 0.1,
};

addPropertyControls(AspectRatio, {
  ComponentInstance: {
    type: ControlType.ComponentInstance,
    title: 'Component',
  },
  Width: {
    type: ControlType.Number,
    step: 1,
    displayStepper: false,
    min: 0,
    max: 20000,
  },
  RatioWidth: {
    ...ratioControls,
  },
  RatioHeight: {
    ...ratioControls,
  },
  Debug: {
    type: ControlType.Boolean,
    defaultValue: false,
  },
});
