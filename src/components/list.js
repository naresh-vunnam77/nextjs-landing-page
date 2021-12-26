import React from "react"
import { Box, Flex, IconButton } from "theme-ui"

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map((item, indx) => (
        <Flex
          classname={item.isAvailable ? "open" : "close"}
          as="li"
          sx={{ ...childStyle }}
          key={indx}
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {item.icon}
          </IconButton>
          {item.text}
        </Flex>
      ))}
    </Box>
  )
}

const styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: "-1px",
    flexShrink: 0,
    justifyContent: "flex-start",
    mt: "2px",
  },
}
