
style({
  backgroundColor: '#f00baa',
  paddingRight: 120
})

onClick(() => fetch('http://201.119.50.1/'))

// ----

style(
  brandedBackground,
  spaceForInfo
)

onClick(fetchInfo)

// ----

// - brand color comes from styleguide.
// - we need to leave some space, there's some weird reason why we have to do it this way.
// - order of things: no specific reason, we're just doing it this way for now.
