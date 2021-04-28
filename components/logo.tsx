export function Logo(props: any) {
  return (
    <svg
      id="Celo_Rings"
      data-name="Celo Rings"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 950 950"
      {...props}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.cls-1{fill:#fbcc5c;}.cls-2{fill:#35d07f;}.cls-3{fill:#5ea33b;}',
          }}
        />
      </defs>
      <title>Artboard 1</title>
      <path
        id="Bottom_Ring"
        data-name="Bottom Ring"
        className="cls-1"
        d="M375,850c151.88,0,275-123.12,275-275S526.88,300,375,300,100,423.12,100,575,223.12,850,375,850Zm0,100C167.9,950,0,782.1,0,575S167.9,200,375,200,750,367.9,750,575,582.1,950,375,950Z"
      />
      <path
        id="Top_Ring"
        data-name="Top Ring"
        className="cls-2"
        d="M575,650c151.88,0,275-123.12,275-275S726.88,100,575,100,300,223.12,300,375,423.12,650,575,650Zm0,100c-207.1,0-375-167.9-375-375S367.9,0,575,0,950,167.9,950,375,782.1,750,575,750Z"
      />
      <path
        id="Rings_Overlap"
        data-name="Rings Overlap"
        className="cls-3"
        d="M587.39,750a274.38,274.38,0,0,0,54.55-108.06A274.36,274.36,0,0,0,750,587.4a373.63,373.63,0,0,1-29.16,133.45A373.62,373.62,0,0,1,587.39,750ZM308.06,308.06A274.36,274.36,0,0,0,200,362.6a373.63,373.63,0,0,1,29.16-133.45A373.62,373.62,0,0,1,362.61,200,274.38,274.38,0,0,0,308.06,308.06Z"
      />
    </svg>
  );
}
