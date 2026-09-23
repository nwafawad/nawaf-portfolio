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
      {variant === 'recyx' && (
        <div className="recyx-ui">
          <span className="visual-label">RECYX / TRANSACTION FLOW</span>
          <div className="recyx-card recyx-card-main">
            <span>Marketplace offer</span>
            <strong>Received</strong>
          </div>
          <div className="recyx-flow" aria-hidden="true">
            <span>Accept</span>
            <i>→</i>
            <span>Transit</span>
            <i>→</i>
            <span>Complete</span>
          </div>
          <div className="recyx-card">
            <span>FastAPI + SQLAlchemy</span>
            <strong>Status rules</strong>
          </div>
        </div>
      )}
      {variant === 'momentum' && (
        <div className="momentum-ui">
          <span className="visual-label">MOMENTUM / LEARNING INSIGHTS</span>
          <div className="momentum-head">
            <strong>Learn</strong>
            <span>Capture, reflect, review</span>
          </div>
          <div className="momentum-list">
            <div>
              <span>Review imported activities</span>
              <i />
            </div>
            <div>
              <span>Explore skill summaries</span>
              <i />
            </div>
            <div>
              <span>Correct your learning profile</span>
              <i />
            </div>
          </div>
        </div>
      )}
      {variant === 'asala' && (
        <div className="asala-ui">
          <span className="visual-label">ASALA HUB / OFFLINE SYNC</span>
          <div className="asala-status">
            <strong>Offline ready</strong>
            <span>Local drafts + cached courses</span>
          </div>
          <div className="asala-queue">
            <div>
              <span>Lesson cache</span>
              <strong>Available</strong>
            </div>
            <div>
              <span>Assignment draft</span>
              <strong>Pending sync</strong>
            </div>
            <div>
              <span>Connection restored</span>
              <strong>Sync &amp; reconcile</strong>
            </div>
          </div>
          <p>IndexedDB → sync queue → FastAPI</p>
        </div>
      )}
      <span className="visual-schematic">Workflow schematic</span>
    </div>
  );
}
