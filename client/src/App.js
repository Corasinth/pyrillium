import React, { useState } from 'react';
import './App.css'

// --------------------------TO DO--------------------------

// * Build basic HTML
// * Build navigation to multiple pages
// * Build HTML and CSS for data entry, view data, stats, and settings pages
// * Build JavaScript for pages and find packages where needed
//     - Data Entry needs to attatch time stamps and provide categorization and additional data options
//     - View Data needs to provide raw editable data that updates stored JSON
//     - Stats needs to be interactable and customizable
//     - Settings needs to primarily include options for color customization and import/export JSON file
//     - Settings should include options for multiple theme "profiles"
// * Find, create, or commission logo (can change colors?) for site and possibly portfolio
// * Create deployment workflow

// --------------------------DEPLOYMENT--------------------------

// * Compile and minify JS and CSS
//     - Multiple packages? Or use Webpack?
// * Stick resulting build into a folder in root
// * Use build folder to send to a branch and deploy with gh-pages
// * Bundled steps together into an npm script



function App() {
  // -------------------------------------------- VARIABLES --------------------------------------------
  const cssStyle = document.querySelector(':root')
  const retrievedJSON = localStorage.getItem('pyrilliumProfileData')
  let pyrilliumProfileData = {
    theme: {
      savedThemes: {},
      currentColors: {
        // HEADER
        // NAVIGATION
        // NEW EXPENSE
        // VIEW DATA
        // STATISTICS
        // SETTINGS
        // FOOTER
      }
    }
  }

  // -------------------------------------------- LOAD THEME --------------------------------------------
  if (!retrievedJSON) {
    localStorage.setItem('pyrilliumProfileData', JSON.stringify(pyrilliumProfileData))
  } else {
    pyrilliumProfileData = JSON.parse(retrievedJSON)
  }

  const keys = Object.keys(pyrilliumProfileData.theme.currentColors)
  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], pyrilliumProfileData.theme.currentColors[keys[i]])
    cssProp(keys[i], pyrilliumProfileData.theme.currentColors[keys[i]])

  }


  // -------------------------------------------- UTILITY FUNCTIONS --------------------------------------------
  function cssProp(propertyName, propertyValue) {
    cssStyle.style.setProperty(`--${propertyName}`, propertyValue)
  }


  // -------------------------------------------- NAV BAR FUNCTIONS --------------------------------------------



  return (
    <>

      <main>
        <div>
          Test
        </div>
      </main>

    </>
  );
}

export default App;
