/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  AddressSpace,
  ApplicationGateway,
  ApplicationGatewayAuthenticationCertificate,
  ApplicationGatewayAutoscaleConfiguration,
  ApplicationGatewayAvailableSslOptions,
  ApplicationGatewayBackendAddress,
  ApplicationGatewayBackendAddressPool,
  ApplicationGatewayBackendHttpSettings,
  ApplicationGatewayConnectionDraining,
  ApplicationGatewayCustomError,
  ApplicationGatewayFirewallDisabledRuleGroup,
  ApplicationGatewayFirewallExclusion,
  ApplicationGatewayFirewallRule,
  ApplicationGatewayFirewallRuleGroup,
  ApplicationGatewayFirewallRuleSet,
  ApplicationGatewayFrontendIPConfiguration,
  ApplicationGatewayFrontendPort,
  ApplicationGatewayHeaderConfiguration,
  ApplicationGatewayHttpListener,
  ApplicationGatewayIPConfiguration,
  ApplicationGatewayPathRule,
  ApplicationGatewayProbe,
  ApplicationGatewayProbeHealthResponseMatch,
  ApplicationGatewayRedirectConfiguration,
  ApplicationGatewayRequestRoutingRule,
  ApplicationGatewayRewriteRule,
  ApplicationGatewayRewriteRuleActionSet,
  ApplicationGatewayRewriteRuleSet,
  ApplicationGatewaySku,
  ApplicationGatewaySslCertificate,
  ApplicationGatewaySslPolicy,
  ApplicationGatewaySslPredefinedPolicy,
  ApplicationGatewayTrustedRootCertificate,
  ApplicationGatewayUrlPathMap,
  ApplicationGatewayWebApplicationFirewallConfiguration,
  ApplicationSecurityGroup,
  AvailableProvidersList,
  AvailableProvidersListCity,
  AvailableProvidersListCountry,
  AvailableProvidersListParameters,
  AvailableProvidersListState,
  AzureFirewall,
  AzureFirewallApplicationRule,
  AzureFirewallApplicationRuleCollection,
  AzureFirewallApplicationRuleProtocol,
  AzureFirewallFqdnTag,
  AzureFirewallIPConfiguration,
  AzureFirewallNatRCAction,
  AzureFirewallNatRule,
  AzureFirewallNatRuleCollection,
  AzureFirewallNetworkRule,
  AzureFirewallNetworkRuleCollection,
  AzureFirewallRCAction,
  AzureReachabilityReport,
  AzureReachabilityReportItem,
  AzureReachabilityReportLatencyInfo,
  AzureReachabilityReportLocation,
  AzureReachabilityReportParameters,
  BackendAddressPool,
  BaseResource,
  BGPCommunity,
  BgpServiceCommunity,
  BgpSettings,
  ConnectionMonitorDestination,
  ConnectionMonitorResult,
  ConnectionMonitorSource,
  ConnectionSharedKey,
  ConnectivityDestination,
  ConnectivityHop,
  ConnectivityInformation,
  ConnectivityIssue,
  ConnectivityParameters,
  ConnectivitySource,
  Container,
  ContainerNetworkInterface,
  ContainerNetworkInterfaceConfiguration,
  ContainerNetworkInterfaceIpConfiguration,
  DdosCustomPolicy,
  DdosProtectionPlan,
  DdosSettings,
  Delegation,
  DeviceProperties,
  DhcpOptions,
  EffectiveNetworkSecurityRule,
  EndpointService,
  EndpointServiceResult,
  ErrorDetails,
  ErrorResponse,
  EvaluatedNetworkSecurityGroup,
  ExpressRouteCircuit,
  ExpressRouteCircuitAuthorization,
  ExpressRouteCircuitConnection,
  ExpressRouteCircuitPeering,
  ExpressRouteCircuitPeeringConfig,
  ExpressRouteCircuitPeeringId,
  ExpressRouteCircuitReference,
  ExpressRouteCircuitServiceProviderProperties,
  ExpressRouteCircuitSku,
  ExpressRouteCircuitStats,
  ExpressRouteConnection,
  ExpressRouteConnectionId,
  ExpressRouteCrossConnection,
  ExpressRouteCrossConnectionPeering,
  ExpressRouteGateway,
  ExpressRouteGatewayPropertiesAutoScaleConfiguration,
  ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds,
  ExpressRouteLink,
  ExpressRoutePort,
  ExpressRoutePortsLocation,
  ExpressRoutePortsLocationBandwidths,
  ExpressRouteServiceProvider,
  ExpressRouteServiceProviderBandwidthsOffered,
  FlowLogFormatParameters,
  FlowLogInformation,
  FlowLogStatusParameters,
  FrontendIPConfiguration,
  HTTPConfiguration,
  HTTPHeader,
  HubVirtualNetworkConnection,
  InboundNatPool,
  InboundNatRule,
  InterfaceEndpoint,
  IPConfiguration,
  IPConfigurationProfile,
  IpsecPolicy,
  IpTag,
  Ipv6ExpressRouteCircuitPeeringConfig,
  LoadBalancer,
  LoadBalancerSku,
  LoadBalancingRule,
  LocalNetworkGateway,
  ManagedServiceIdentity,
  ManagedServiceIdentityUserAssignedIdentitiesValue,
  MatchedRule,
  NetworkConfigurationDiagnosticParameters,
  NetworkConfigurationDiagnosticProfile,
  NetworkConfigurationDiagnosticResponse,
  NetworkConfigurationDiagnosticResult,
  NetworkInterface,
  NetworkInterfaceAssociation,
  NetworkInterfaceDnsSettings,
  NetworkInterfaceIPConfiguration,
  NetworkInterfaceTapConfiguration,
  NetworkProfile,
  NetworkSecurityGroup,
  NetworkSecurityGroupResult,
  NetworkSecurityRulesEvaluationResult,
  NetworkWatcher,
  NetworkWatcherListResult,
  NextHopParameters,
  NextHopResult,
  OutboundRule,
  P2SVpnGateway,
  P2SVpnServerConfigRadiusClientRootCertificate,
  P2SVpnServerConfigRadiusServerRootCertificate,
  P2SVpnServerConfiguration,
  P2SVpnServerConfigVpnClientRevokedCertificate,
  P2SVpnServerConfigVpnClientRootCertificate,
  PatchRouteFilter,
  PatchRouteFilterRule,
  Probe,
  ProtocolConfiguration,
  ProtocolCustomSettingsFormat,
  PublicIPAddress,
  PublicIPAddressDnsSettings,
  PublicIPAddressSku,
  PublicIPPrefix,
  PublicIPPrefixSku,
  QueryTroubleshootingParameters,
  ReferencedPublicIpAddress,
  Resource,
  ResourceNavigationLink,
  RetentionPolicyParameters,
  Route,
  RouteFilter,
  RouteFilterRule,
  RouteTable,
  SecurityGroupNetworkInterface,
  SecurityGroupViewParameters,
  SecurityGroupViewResult,
  SecurityRule,
  SecurityRuleAssociations,
  ServiceAssociationLink,
  ServiceEndpointPolicy,
  ServiceEndpointPolicyDefinition,
  ServiceEndpointPropertiesFormat,
  Subnet,
  SubnetAssociation,
  SubResource,
  TagsObject,
  Topology,
  TopologyAssociation,
  TopologyParameters,
  TopologyResource,
  TrafficAnalyticsConfigurationProperties,
  TrafficAnalyticsProperties,
  TroubleshootingDetails,
  TroubleshootingParameters,
  TroubleshootingRecommendedActions,
  TroubleshootingResult,
  TunnelConnectionHealth,
  VerificationIPFlowParameters,
  VerificationIPFlowResult,
  VirtualHub,
  VirtualHubId,
  VirtualHubRoute,
  VirtualHubRouteTable,
  VirtualNetwork,
  VirtualNetworkConnectionGatewayReference,
  VirtualNetworkGateway,
  VirtualNetworkGatewayConnection,
  VirtualNetworkGatewayConnectionListEntity,
  VirtualNetworkGatewayIPConfiguration,
  VirtualNetworkGatewaySku,
  VirtualNetworkPeering,
  VirtualNetworkTap,
  VirtualWAN,
  VpnClientConfiguration,
  VpnClientConnectionHealth,
  VpnClientRevokedCertificate,
  VpnClientRootCertificate,
  VpnConnection,
  VpnGateway,
  VpnSite
} from "../models/mappers";
