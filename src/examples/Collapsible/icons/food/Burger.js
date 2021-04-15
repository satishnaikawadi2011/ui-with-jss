import * as React from "react";

function Burger(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      height={40}
      width={40}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M470.949 396.925H41.051c-18.531 0-33.554-15.022-33.554-33.554v-6.606c0-18.531 15.022-33.554 33.554-33.554h429.897c18.531 0 33.554 15.022 33.554 33.554v6.606c0 18.532-15.022 33.554-33.553 33.554z"
        fill="#e94444"
      />
      <path
        d="M470.949 265.16H41.051c-18.531 0-33.554-15.022-33.554-33.554V225c0-18.531 15.022-33.554 33.554-33.554h429.897c18.531 0 33.554 15.022 33.554 33.554v6.606c0 18.532-15.022 33.554-33.553 33.554z"
        fill="#9e5528"
      />
      <path
        d="M504.5 356.761v6.608c0 18.535-15.016 33.561-33.551 33.561h-19.634c18.535 0 33.55-15.026 33.55-33.561v-6.608c0-18.525-15.016-33.551-33.55-33.551h19.634c18.535.001 33.551 15.027 33.551 33.551z"
        fill="#d83131"
      />
      <path
        d="M504.5 224.999v6.608c0 18.535-15.016 33.551-33.551 33.551h-19.634c18.535 0 33.55-15.016 33.55-33.551v-6.608c0-18.525-15.016-33.551-33.55-33.551h19.634c18.535 0 33.551 15.026 33.551 33.551z"
        fill="#904d24"
      />
      <path
        d="M256 8.254C88.415 10.68 32.11 101.586 13.521 154.406c-6.369 18.099 7.21 37.04 26.398 37.04H472.079c19.329 0 32.735-19.132 26.289-37.355C479.667 101.226 423.253 10.675 256 8.254z"
        fill="#fe9738"
      />
      <path
        d="M472.079 191.448h-2.389c6.508-7.258 9.187-17.825 5.559-28.102-18.705-52.875-75.119-143.42-242.372-145.839-43.268.62-79.128 7.148-108.819 17.395C157.728 19.437 200.836 9.05 256 8.25c167.253 2.429 223.667 92.974 242.372 145.839 6.438 18.224-6.968 37.359-26.293 37.359z"
        fill="#fe860a"
      />
      <path
        d="M470.949 396.925H41.051s-14.825 71.587 69.539 99.75c14.452 4.824 29.539 7.07 44.669 7.07H356.74c15.13 0 30.217-2.246 44.669-7.07 84.365-28.163 69.54-99.75 69.54-99.75z"
        fill="#fe9738"
      />
      <path
        d="M401.409 496.672c-14.456 4.829-29.542 7.078-44.667 7.078h-22.774c15.136 0 30.221-2.249 44.677-7.078 84.356-28.162 69.53-99.742 69.53-99.742h22.774s14.826 71.58-69.54 99.742z"
        fill="#fe860a"
      />
      <path
        d="M471.735 336.576c0 16.752-19.465 25.834-32.407 15.197-5.32-4.373-11.603-7.837-21.56-7.837-26.98 0-26.98 21.372-53.96 21.372-26.981 0-26.981-21.372-53.961-21.372-26.979 0-26.979 21.372-53.959 21.372-26.979 0-26.979-21.372-53.958-21.372-26.981 0-26.981 21.372-53.961 21.372-26.979 0-26.979-21.372-53.959-21.372-9.953 0-16.234 3.463-21.552 7.833-12.943 10.636-32.408 1.557-32.408-15.196v-39.646h431.686v39.649z"
        fill="#bbec6c"
      />
      <path
        d="M471.739 296.928v39.649c0 15.676-17.045 24.633-29.832 17.005 5.648-3.299 9.707-9.347 9.707-17.005v-39.649z"
        fill="#a2e62e"
      />
      <path
        d="M40.265 265.16v32.062h46.279c9.628 0 17.432 7.805 17.432 17.432v92.341c0 12.309 9.978 22.287 22.287 22.287s22.287-9.978 22.287-22.287v-92.341c0-9.628 7.805-17.432 17.432-17.432h305.752V265.16z"
        fill="#fee45a"
      />
      <path d="M451.615 265.157h20.124v32.061h-20.124z" fill="#fedf30" />
      <path d="M186.826 85.343a7.497 7.497 0 006.603-3.935l6.504-12.035a7.498 7.498 0 10-13.192-7.13l-6.504 12.035a7.497 7.497 0 003.031 10.161 7.455 7.455 0 003.558.904zM263.408 78.666v-13.68a7.498 7.498 0 00-14.996 0v13.68a7.498 7.498 0 0014.996 0zM325.175 85.242a7.498 7.498 0 006.479-11.261l-6.863-11.834a7.499 7.499 0 00-12.972 7.524l6.863 11.834a7.497 7.497 0 006.493 3.737z" />
      <path d="M512 231.606V225c0-14.005-7.054-26.388-17.791-33.8a35.838 35.838 0 006.756-7.203c6.651-9.406 8.322-21.521 4.471-32.406-9.3-26.29-28.628-64.149-67.893-95.215C392.27 20.558 331.227 1.844 256.108.757a7.849 7.849 0 00-.217 0c-33.951.491-65.402 4.645-93.479 12.346a7.499 7.499 0 003.966 14.462c26.826-7.358 56.978-11.332 89.621-11.812 162.214 2.39 217.053 89.26 235.298 140.839 2.263 6.396 1.323 13.229-2.578 18.748-3.868 5.471-9.934 8.609-16.642 8.609H39.919c-6.733 0-12.831-3.156-16.728-8.66-3.851-5.437-4.797-12.142-2.597-18.394 13.301-37.796 43.846-89.012 113.825-118.36a7.497 7.497 0 10-5.799-13.829C94.546 38.996 66.034 59.642 43.878 86.07c-16.303 19.445-28.896 41.599-37.429 65.847-3.836 10.902-2.195 22.58 4.505 32.039a35.4 35.4 0 006.855 7.232C7.061 198.599 0 210.988 0 225v6.606c0 19.799 14.089 36.368 32.767 40.211l-.15 44.776C14.015 320.494 0 337.021 0 356.765v6.606c0 19.788 14.074 36.349 32.737 40.204-.503 7.891-.245 20.697 4.305 34.945 12.263 38.4 45.474 56.688 71.174 65.267 14.821 4.947 30.649 7.456 47.044 7.456h201.481c16.395 0 32.222-2.509 47.043-7.456 25.701-8.58 58.912-26.867 71.174-65.267 4.55-14.247 4.808-27.054 4.305-34.945C497.926 399.721 512 383.159 512 363.371v-6.606c0-19.797-14.091-36.352-32.767-40.194v-44.754C497.911 267.975 512 251.405 512 231.606zM14.996 363.371v-6.606c0-11.394 7.361-21.081 17.57-24.611l-.015 4.419c0 10.643 5.969 20.075 15.576 24.616 9.663 4.567 20.811 3.177 29.09-3.627 3.873-3.183 8.588-6.128 16.792-6.128.863 0 1.676.035 2.469.084v37.909H41.051c-14.367 0-26.055-11.689-26.055-26.056zm298.792-58.651h150.449v31.856c0 4.857-2.613 8.991-6.988 11.058-4.432 2.094-9.351 1.476-13.16-1.654-5.406-4.443-13.283-9.543-26.321-9.543-16.099 0-24.353 6.538-31.635 12.307-6.394 5.065-11.445 9.065-22.325 9.065-10.881 0-15.931-4-22.325-9.065-7.282-5.768-15.536-12.307-31.636-12.307s-24.714 6.824-31.636 12.307c-6.394 5.065-11.444 9.065-22.323 9.065-10.88 0-15.93-4-22.323-9.065-6.921-5.483-15.536-12.307-31.635-12.307-16.1 0-24.353 6.538-31.636 12.307-4.558 3.611-8.451 6.667-14.245 8.129v-42.219c0-5.478 4.456-9.934 9.934-9.934h112.646a7.498 7.498 0 000-14.996H165.982c-13.747 0-24.93 11.183-24.93 24.93v92.341c0 8.155-6.634 14.79-14.789 14.79s-14.789-6.635-14.789-14.79v-92.341c0-13.747-11.184-24.93-24.93-24.93H47.763v-17.066h416.474v17.066H313.788a7.498 7.498 0 000 14.996zm-227.245 0c5.478 0 9.935 4.456 9.935 9.934V336.5a53.28 53.28 0 00-2.469-.063c-13.034 0-20.909 5.097-26.313 9.538-3.81 3.13-8.729 3.749-13.163 1.654-4.375-2.067-6.987-6.201-6.987-11.057V304.72zm374.13 129.238c-8.308 26.017-29.046 44.725-61.638 55.604-13.287 4.436-27.517 6.685-42.295 6.685H155.26c-14.778 0-29.008-2.249-42.295-6.685-63.845-21.312-66.519-68.39-65.308-85.14h48.822v2.572c0 16.424 13.361 29.786 29.785 29.786s29.785-13.361 29.785-29.786v-2.572h308.256c.423 6.405.271 17.313-3.632 29.536zm36.331-77.193v6.606c0 14.367-11.689 26.056-26.056 26.056h-314.9v-17.248c10.995-1.754 17.607-6.968 23.556-11.68 6.394-5.065 11.445-9.065 22.325-9.065s15.93 4 22.323 9.065c6.922 5.483 15.536 12.307 31.635 12.307s24.353-6.538 31.635-12.307c6.394-5.065 11.444-9.065 22.324-9.065 10.881 0 15.931 4 22.325 9.065 7.282 5.768 15.536 12.307 31.636 12.307s24.354-6.538 31.636-12.307c6.394-5.065 11.444-9.065 22.324-9.065 8.207 0 12.924 2.947 16.799 6.133 8.278 6.803 19.425 8.194 29.089 3.627 9.608-4.54 15.577-13.973 15.577-24.617v-4.508c10.318 3.469 17.772 13.225 17.772 24.696zm-26.055-99.103H41.051c-14.367 0-26.056-11.689-26.056-26.056V225c0-14.367 11.689-26.056 26.056-26.056h429.897c14.367 0 26.056 11.689 26.056 26.056v6.606c0 14.367-11.688 26.056-26.055 26.056z" />
    </svg>
  );
}

export default Burger;