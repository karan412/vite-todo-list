# 🚀 Modern Todo List App

A sleek, feature-rich todo list application built with React, TypeScript, and Vite. Features a beautiful black and blue gradient design with glassmorphism effects and smooth animations.

![Todo App Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## ✨ Features

### 🎨 **Modern Design**
- **Black & Blue Gradient Theme** - Sleek dark theme with vibrant blue accents
- **Glassmorphism Effects** - Beautiful frosted glass design elements
- **Smooth Animations** - Powered by Framer Motion for fluid interactions
- **Responsive Design** - Works perfectly on desktop and mobile devices

### ⏰ **Real-time Clock**
- Live date and time display that updates every second
- Beautiful gradient text styling
- Located prominently at the top of the app

### 📝 **Todo Management**
- **Add Todos** - Click the circular (+) button or press Enter
- **Mark Complete** - Check todos to automatically move them to the bottom
- **Delete Todos** - Click the trash bin (🗑️) icon to remove items
- **Local Storage** - All todos are automatically saved to your browser

### 🏷️ **Priority System**
- **Three Priority Levels:**
  - 🔴 **High Priority** - Red flag for urgent tasks
  - 🟡 **Medium Priority** - Yellow circle for normal tasks
  - 🟢 **Low Priority** - Green circle for low-priority items
- **Smart Sorting** - Todos automatically sort by priority and completion status
- **Priority Cycling** - Click the flag icon on any todo to change its priority

### 🎯 **Smart Organization**
- **Auto-sorting** - Incomplete todos stay at top (sorted by priority)
- **Completed todos** automatically move to the bottom
- **Visual separation** between active and completed tasks

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Smooth animations and transitions
- **CSS3** - Custom styling with gradients and effects
- **Local Storage API** - Persistent data storage

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎮 How to Use

### Adding Todos
1. Type your task in the input field
2. Select a priority level (High/Medium/Low)
3. Click the blue (+) button or press Enter

### Managing Todos
- **Complete**: Click the checkbox next to any todo
- **Change Priority**: Click the colored flag icon (🔴🟡🟢)
- **Delete**: Click the trash bin icon (🗑️)

### Priority System
- **Before adding**: Select priority using the buttons below the input
- **After adding**: Click the flag icon to cycle through priorities
- **Auto-sorting**: High priority items appear first, completed items at bottom

## 📱 Features in Detail

### Real-time Clock
- Updates every second
- Shows full date (e.g., "Friday, July 4, 2025")
- Shows time in 12-hour format with AM/PM

### Animations
- **Slide-in effects** when adding new todos
- **Smooth hover animations** on all interactive elements
- **Scale effects** on button presses
- **Slide-out animations** when deleting todos

### Responsive Design
- **Desktop**: Full-width layout with spacious design
- **Mobile**: Stacked layout with optimized spacing
- **Tablet**: Adaptive design that works on all screen sizes

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/App.css`:
```css
/* Main blue gradients */
background: linear-gradient(45deg, #1744ff 0%, #6b9dff 100%);

/* Accent colors */
color: #6b9dff;
border-color: rgba(107, 157, 255, 0.3);
```

### Adding New Features
The codebase is modular and easy to extend:
- **Todo interface**: Modify in `App.tsx`
- **Styling**: Update `App.css`
- **New animations**: Add to Framer Motion components

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.x.x"
  },
  "devDependencies": {
    "@types/react": "^18.x.x",
    "@types/react-dom": "^18.x.x",
    "@vitejs/plugin-react": "^4.x.x",
    "typescript": "^5.x.x",
    "vite": "^5.x.x"
  }
}
```

## 🌟 Key Features Breakdown

| Feature | Description | Status |
|---------|-------------|--------|
| ✅ Real-time Clock | Live date/time display | ✅ Complete |
| ✅ Priority System | 3-level priority with visual indicators | ✅ Complete |
| ✅ Smart Sorting | Auto-sort by priority and completion | ✅ Complete |
| ✅ Local Storage | Persistent data across sessions | ✅ Complete |
| ✅ Animations | Smooth Framer Motion animations | ✅ Complete |
| ✅ Responsive | Works on all devices | ✅ Complete |
| ✅ Glassmorphism | Modern frosted glass effects | ✅ Complete |

## 🎨 Design Philosophy

This todo app embraces modern web design principles:
- **Minimalism** - Clean, uncluttered interface
- **Functionality** - Every element serves a purpose
- **Accessibility** - High contrast and clear visual hierarchy
- **Performance** - Optimized with Vite for fast loading
- **User Experience** - Intuitive interactions and feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Todo categories and tags
- [ ] Due dates and reminders
- [ ] Export/Import functionality
- [ ] Collaboration features
- [ ] Mobile app version

---


