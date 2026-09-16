export default function CleanerGrid() {
  return (
    <article className="article">
        <h2>Cleaner Grid</h2>
        <p>
          With a UCD team I took third place at EirGrid&apos;s CleanerGrid 2026 competition, sharing
          a €3,000 prize. The brief asked students to look at opportunities and challenges in
          accelerating Ireland&apos;s offshore wind. We were one of three UCD teams in the final,
          picked from thirty-two submissions across nine colleges.
        </p>
        <p>
          Our pitch was an Offshore Transmission Outage Coordination System with a wind turbine
          monitoring dashboard: a master project manager for turbines and substations off the Irish
          coast. The idea was to give operators one place to see the live state of the offshore
          network and plan work around it, instead of jumping between scattered tools.
        </p>
        <p>
          My job on the team was to build the dashboard in its entirety. I owned it end to end:
          React, Tailwind CSS, and Mapbox, from the first layout through to the live map, the
          scheduling views, and the graphs. Nobody else wrote that interface. Mapbox carried a live
          map of the assets, while EirGrid SCADA feeds drove near real-time visuals of what the
          turbines and substations were actually doing. Scheduling sat in the same view, so planned
          outages and work orders could be laid over the live picture, and the same data was plotted
          on graphs so trends, constraints, and clashes were easy to spot at a glance.
        </p>
        <img
          src="/images/cleanergrid/dashboard-map.jpg"
          alt="Map dashboard showing offshore turbines, substations, and transmission cables off the Irish coast"
        />
        <img
          src="/images/cleanergrid/dashboard-scheduling.png"
          alt="Scheduling view with asset table, conflict warnings, event log, Gantt chart, and calendar"
        />
        <img
          src="/images/cleanergrid/dashboard-asset.jpg"
          alt="Turbine detail panel with output trend, asset info, risk trend, and maintenance recommendation"
        />
        <h3>Articles</h3>
        <ul>
          <li>
            <a
              href="https://www.midlands103.com/news/midlands-news/westmeath-student-claim-e3k-prize-at-eirgrids-cleanergrid-competition/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Westmeath student claims €3k prize at EirGrid&apos;s CleanerGrid competition (Midlands
              103)
            </a>
          </li>
          <li>
            <a
              href="https://www.westmeathindependent.ie/2026/03/25/moate-student-claims-third-place-in-energy-challenge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Moate student claims third place in energy challenge (Westmeath Independent)
            </a>
          </li>
        </ul>
    </article>
  )
}
