# sandboxExamples
# Vanilla CSS and HTML Component Collection

A collection of reusable, modern UI components built with vanilla CSS and HTML. This project serves as a personal library of responsive design patterns using CSS Flexbox and Grid layouts that can be easily copied into future projects.

## Overview

This collection contains hand-crafted UI components without relying on external CSS frameworks. Each component demonstrates clean, modern design techniques that can be quickly implemented in any web project.

## Components

### 1. Modern Responsive Navbar
A sleek navigation bar that transforms into a hamburger menu on mobile devices.

**Features:**
- Smooth transitions and animations
- Responsive design with hamburger menu for mobile
- Active state styling
- Hover effects with underline animation
- CSS variables for easy customization

**Files:**
- `menu.html` - Basic structure
- `menu.css` - Styling with responsive breakpoints
- `menu.js` - Toggle functionality for mobile menu

### 2. Dark/Light Mode Toggle
A stylish theme switcher that allows users to toggle between light and dark modes.

**Features:**
- Animated toggle button with icons
- Theme preference stored in localStorage
- Smooth transition between themes
- CSS variables for theme colors

**Files:**
- `sandbox.html` - Example implementation
- `style.css` - Theme definitions and toggle styling
- `darkMode.js` - Theme switching functionality

## CSS Techniques Used

### Flexbox
- Navigation layout (`menu.css`)
- Button alignment
- Content centering

### CSS Grid
- Layout structuring (can be expanded for future components)

### CSS Variables
- Theme color definitions (`:root` selector)
- Easy customization points
- Consistent color scheme

### Media Queries
- Responsive breakpoints for mobile adaptation
- Different layouts based on screen size

### Transitions & Animations
- Smooth theme transitions
- Menu item animations
- Hamburger menu transformation
- Toggle button effects

## Usage

Each component is built with modularity in mind. To use a component in your project:

1. Copy the relevant HTML structure
2. Include the CSS (you may need to adjust variable names)
3. Include the JavaScript for interactive components
4. Customize colors, sizes, and other properties as needed

### Example: Adding the Navbar

```html
<!-- Copy the navbar structure from menu.html -->
<nav class="navbar">
  <!-- ... navbar content ... -->
</nav>

<!-- Link the CSS -->
<link rel="stylesheet" href="path/to/your/copy/of/menu.css">

<!-- Add the JavaScript -->
<script src="path/to/your/copy/of/menu.js"></script>
```

### Example: Adding Dark Mode Toggle

```html
<!-- Copy the toggle button from sandbox.html -->
<button id="theme-toggle" class="theme-toggle">
  <!-- ... toggle content ... -->
</button>

<!-- Add the necessary CSS variables to your stylesheet -->
<link rel="stylesheet" href="path/to/your/copy/of/style.css">

<!-- Add the JavaScript -->
<script src="path/to/your/copy/of/darkMode.js"></script>
```

## Customization

### Colors
Change the color scheme by modifying the CSS variables in the `:root` selector:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* etc. */
}
```

### Sizes and Spacing
Adjust dimensions and spacing in the relevant CSS files.

## Browser Compatibility

Components are built with modern CSS properties and should work in all contemporary browsers. Some animations and transitions may have different behaviors in older browsers.

## Future Additions

Potential components to add to this collection:
- Form elements and input styling
- Card layouts
- Modal windows
- Image galleries
- Accordion/collapsible sections
- Tabs interface
- CSS-only tooltips
- Progress indicators

## License

Feel free to use these components in personal and commercial projects.