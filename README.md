
## How It Works
1. **Content Script**: The `content.js` script is injected into YouTube pages. It modifies the DOM to reduce the number of visible recommendations.
2. **Popup Interface**: The popup interface (`index.html`) allows users to easily enable or disable the extension's functionality.
3. **Manifest File**: The `manifest.json` file defines the permissions and resources required for the extension to run. It specifies that the content script is active on all YouTube pages.

## Permissions
- **activeTab**: Grants the extension access to the active tab where it can inject the content script.
- **scripting**: Allows the extension to modify the content of YouTube pages.

## How to Use
1. Install the extension following the steps mentioned above.
2. Once installed, click the FocusedTube icon in the toolbar to open the popup.
3. You can toggle the extension on and off from the popup menu.

## Future Enhancements
- Add options for users to set custom limits on recommended videos.
- Provide functionality to block or hide other distracting elements, like the comments section.
- Create a dark mode toggle for the extension popup interface.

## License
This project is licensed under the MIT License.

## Contact
If you have any feedback, suggestions, or issues, feel free to reach out:

- **Nishant Chauhan**  
  Email: nishant12200333@gmail.com  
  LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/nishant-chauhan)

---
Thank you for using **FocusedTube**! Stay productive and focused while enjoying your YouTube experience.
