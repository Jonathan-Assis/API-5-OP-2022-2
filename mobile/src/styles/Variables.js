import { Colors } from './Colors'

const StyledColors = {
    background: {
        Primary: {
            backgroundColor: Colors.purplePrimary
        },
        Secondary: {
            backgroundColor: Colors.grayPrimary
        }
    },

    icon:{
        White: {
            color: Colors.white
        },
        Black: {
            color: Colors.black
        },
        Red: {
            color: Colors.red
        },
        Yellow: {
            color: Colors.yellow
        },
        Green: {
            color: Colors.green
        },
        LightBlue: {
            color: Colors.lightBlue
        }
    },

    text: {
        Primary:{
            color: Colors.black
        },
        Secondary: {
            color: Colors.graySecondary
        },
        Tertiary: {
            color: Colors.white
        },
        Purple: {
            color: Colors.purplePrimary
        }
    },

    border: {
        Primary: {
            borderColor: Colors.purplePrimary
        },
        Secondary: {
            borderColor: Colors.grayPrimary

        }
    }
}

const StyledMeasurements = {
    text: {
        Large:{
        fontWeight: 'bold',
        fontSize: 22
    },
        Medium:{
            fontWeight: '500',
            fontSize: 16
        },
        Regular:{
            fontWeight: '400',
            fontSize: 14
        },
        Small:{
            fontWeight: '300',
            fontSize: 12,
        },
    },
    border: {
        Radius: {
            borderRadius: 16,
        },
        Width: {
            borderWidth:2,
        },
        LineWidth: {
            borderBottomWidth:2,
        }
    }
}

const StyledVariables = {
    text: {
        Large:{
            Primary: {
                ...StyledMeasurements.text.Large,
                ...StyledColors.text.Primary,
            },
            Secondary: {
                ...StyledMeasurements.text.Large,
                ...StyledColors.text.Secondary,
            },
            Tertiary: {
                ...StyledMeasurements.text.Large,
                ...StyledColors.text.Tertiary,
            }
        },
        Medium: {
            Primary: {
                ...StyledMeasurements.text.Medium,
                ...StyledColors.text.Primary,
            },
            Secondary: {
                ...StyledMeasurements.text.Medium,
                ...StyledColors.text.Secondary,
            },
            Tertiary: {
                ...StyledMeasurements.text.Medium,
                ...StyledColors.text.Tertiary,
            },
            Purple: {
                ...StyledMeasurements.text.Medium,
                ...StyledColors.text.Purple,
            }
        },
        Regular: {
            Primary: {
                ...StyledMeasurements.text.Regular,
                ...StyledColors.text.Primary,
            },
            Secondary: {
                ...StyledMeasurements.text.Regular,
                ...StyledColors.text.Secondary,
            },
            Tertiary: {
                ...StyledMeasurements.text.Regular,
                ...StyledColors.text.Tertiary,
            }
        },
        Small: {
            Primary: {
                ...StyledMeasurements.text.Small,
                ...StyledColors.text.Primary,
            },
            Secondary: {
                ...StyledMeasurements.text.Small,
                ...StyledColors.text.Secondary,
            },
            Tertiary: {
                ...StyledMeasurements.text.Small,
                ...StyledColors.text.Tertiary,
            }
        }
    },

    box: {
        Colored:{
            Primary: {
                ...StyledColors.background.Primary,
                ...StyledMeasurements.border.Radius
            },
            Secondary: {
                ...StyledColors.background.Secondary,
                ...StyledMeasurements.border.Radius
            }
        },
        Stroke:{
            Primary: {
                ...StyledColors.border.Primary,
                ...StyledMeasurements.border.Radius,
                ...StyledMeasurements.border.Width
            },
            Secondary: {
                ...StyledColors.border.Secondary,
                ...StyledMeasurements.border.Radius,
                ...StyledMeasurements.border.Width
            }
        },
        Line: {
            Primary: {
                ...StyledColors.border.Primary,
                ...StyledMeasurements.border.LineWidth
            },
            Secondary: {
                ...StyledColors.border.Secondary,
                ...StyledMeasurements.border.LineWidth
            }
        }
    },
};

export { StyledColors, StyledMeasurements, StyledVariables }