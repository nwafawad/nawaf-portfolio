import type { ProjectVisualVariant } from '@/lib/projects';

export function ProjectVisual({
  variant,
  compact = false,
}: {
  variant: ProjectVisualVariant;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-visual visual-${variant}${compact ? ' compact' : ''}`}
      aria-hidden="true"
    >
      {variant === 'relay' && (
        <div className="relay-ui">
          <span className="visual-label">TODAY / 06</span>
          <div className="relay-card relay-card-main">
            <span>Intake review</span>
            <strong>Ready</strong>
          </div>
          <div className="relay-card">
            <span>Handoff</span>
            <i />
          </div>
          <div className="relay-card">
            <span>Follow-up</span>
            <i />
          </div>
        </div>
      )}
      {variant === 'ledger' && (
        <div className="ledger-ui">
          <span className="visual-label">REVIEW QUEUE</span>
          <strong>24</strong>
          <div className="ledger-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="ledger-row">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
      {variant === 'wayfinder' && (
        <div className="wayfinder-ui">
          <span className="visual-label">ROUTE 04</span>
          <div className="route-line">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="route-copy">
            <strong>18 min</strong>
            <span>2 changes</span>
          </div>
        </div>
      )}
    </div>
  );
}
