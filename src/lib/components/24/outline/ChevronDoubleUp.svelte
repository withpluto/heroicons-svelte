<script>
  export let color = 'currentColor'
  export let size = 24
  export let strokeWidth = 1.5
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4.5 18.75L12 11.25L19.5 18.75"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M4.5 12.75L12 5.25L19.5 12.75"
    stroke={color}
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
