ARG KEYCLOAK_VERSION=latest
FROM quay.io/keycloak/keycloak:${KEYCLOAK_VERSION} AS kc-builder

ENV KC_DB=postgres \
    KC_HEALTH_ENABLED=true \
    KC_METRICS_ENABLED=true \
    KC_HTTP_MANAGEMENT_PORT=9000

ARG KC_FEATURES=

COPY .ci-artifacts/aisflow.jar /opt/keycloak/providers/aisflow.jar

RUN set -e; \
    if [ -z "${KC_FEATURES:-}" ]; then unset KC_FEATURES; fi; \
    /opt/keycloak/bin/kc.sh build

# ── Runtime ────────────────────────────────────────────────────────
FROM quay.io/keycloak/keycloak:${KEYCLOAK_VERSION}

COPY --from=kc-builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start", "--optimized"]
