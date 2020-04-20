import React from "react"

function Patching() {
  return (
    <div className="column is-10">
      <div className="box" style={{ marginTop: "1%" }}>
        <p className="is-size-4 has-text-weight-bold">Patching Guide</p>
        <ol style={{ marginLeft: "4%", marginTop: "1%" }}>
          <li>
            Only you (or your team) can manage your own services. You cannot
            manage the service owned by other teams.
          </li>
          <li>
            Managing service is done via service page. Service page can be found
            ind{" "}
            <span className="has-text-weight-semibold">
              /[team_id]/[service_id]
            </span>
            . or by browseing from the navigation in sidebar under Unlocked
            services category.
          </li>
          <li>
            You may need to unlock a service before allowed to manage / patch
            the service. (depends on CTF rules)
          </li>
          <li>
            Patching is done by uploading a patch file using the{" "}
            <span className="has-text-weight-semibold">Upload patch</span>{" "}
            functionality inside service page
          </li>
          <li>
            Patch file is a diff file, containing the difference to be patched
            into the service. Important! files in .gitignore will be ignored
            when applying patch.
          </li>
          <ul style={{ listStyleType: "circle", marginLeft: "2%" }}>
            <li>
              For reference, patch file can be created by using this command:
            </li>
            <pre style={{ marginBottom: "1%" }}>
              git diff --binary > service.patch
            </pre>
            <li>
              Patch will be applied inside service machine with this command:
            </li>
            <pre style={{ marginBottom: "1%" }}>
              git apply --binary --exclude=[files in .gitignore] [patch_file]
            </pre>
          </ul>
          <li>
            This patcher tool migh have some bugs. Please be mindful when using
            this tool. Please refrain from uploading patch multiple times while
            a patching process is still on going inside the service machine, as
            they migh incur a race condition and break the machine.
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Patching
