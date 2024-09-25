import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";

export default function BLButton(props) {
  const { onClick, label, style, variant, color, iconSrc, id , disabled } = props;

  return (
    <Button
      disabled={disabled}
      id={id}
      color={color}
      variant={variant}
      style={style}
      onClick={onClick}
      sx={{
        '&:hover': {
          backgroundColor: 'white',
          color: 'black !important', // Add !important to enforce the hover color
        },
      }}
    >
      {iconSrc ? (
        <Avatar
          src={iconSrc}
          sx={{ width: '2vw', height: '2vw', marginRight: '1vw', marginBottom: '2px', background: 'cover' }}
        />
      ) : (
        ''
      )}
      {label}
    </Button>
  );
}
