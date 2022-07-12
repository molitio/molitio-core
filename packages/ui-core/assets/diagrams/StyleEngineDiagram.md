title Resource Gallery

User->Browser: Navigates to the component
Browser->ui-core: Looks up module for the component
ui-core->resource-gallery: given a theme and data it returns a component with style and data filled in
resource-gallery->style-engine: gets a theme name and the type of the component (Button, Input)
style-engine<--Browser: styled JSX component
