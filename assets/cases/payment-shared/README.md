# Paired payment feedback animations

Two local vector-animation cases share this source and stylesheet:

- payment-orbit: circular arc closes into a ring, the ring thickens into a filled disc, then the check or cross draws in. Reference: user-provided huaban-5594860161.gif (800 × 600, 181 frames, approximately 5.43s including the result hold).
- payment-pop: a dot expands, springs back and settles, while particles disperse and the result mark draws in. Reference: user-provided payment.gif (150 × 84, 47 frames, approximately 1.56s).

Success and failure are displayed together in each case. The final requested failure color is shared as #ee6269 for both variants; the pop variant's failure particles use that same red. Success colors retain each variant's green treatment. These are demonstration states, with no payment gateway or transaction behavior.

Native SVG and GSAP timelines provide crisp rendering, per-card replay, simultaneous replay, optional looping, speed adjustment, and reduced-motion final states. Tick and cross paths come from the installed official Hugeicons core-free icon data; license is retained here. Failure variants are authored counterparts to the success references. Motion/timing is reconstructed from the supplied recordings rather than extracted original authoring code.

Original GIF files remain byte-identical in each case's reference/ directory; provenance hashes are recorded under verification/payment/source-records.json. Pages use locally bundled code and assets.

Build from interaction-library/components/react-bits using npm ci and npm run build.
